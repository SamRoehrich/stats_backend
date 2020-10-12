import "reflect-metadata";
import express from "express";
import { createConnection, getConnectionOptions, getConnection } from "typeorm";
import cors from "cors";
import http from "http";
import ws from "ws";

import { Event } from "./entity/Event";
import { Athlete } from "./entity/Athlete";
import { ScoreCard } from "./entity/ScoreCard";
import { Boulder } from "./entity/Boulder";

(async () => {
  const app = express();
  const server = http.createServer(app);
  // const port = process.env.PORT || 5000;
  const wss = new ws.Server({ path: "/socket", server });

  app.use(cors());
  app.use(express.json());

  const connectionOptions = await getConnectionOptions(process.env.NODE_ENV);

  process.env.NODE_ENV == "production"
    ? await createConnection({
        ...connectionOptions,
        url:
          "postgres://mpmaifdvxwghvj:bd6be047c85685388d47fc92e7c2df557e7c71e8b493c218ffd8e7530b301bef@ec2-50-16-198-4.compute-1.amazonaws.com:5432/da7bc573qoo1nj",
        name: "default",
        extra: {
          ssl: {
            rejectUnauthorized: false,
          },
        },
      } as any)
    : await createConnection();

  app.get("/", (_req, res) => {
    res.send("Server");
  });

  app.get("/events", async (_req, res) => {
    res.send(await Event.find());
  });

  app.get("/event", async (req, res) => {
    const event = await Event.findOne({ where: { id: req.body.eventId } });

    event !== undefined ? res.send(event) : res.sendStatus(500);
  });

  app.post("/createEvent", async (req, res) => {
    const {
      eventName,
      eventLocation,
      eventDate,
      rcName,
      rcEmail,
      adminPassword,
      scoreKeeperCode,
      numBoulders,
    } = req.body;
    console.log(req.body);
    const newEvent = await Event.create({
      eventName,
      eventLocation,
      eventDate,
      rcEmail,
      rcName,
      adminPassword,
      scoreKeeperCode,
      numBoulders,
    }).save();
    newEvent.hasId() ? res.sendStatus(200) : res.sendStatus(500);
  });

  app.post("/addAthlete", async (req, res) => {
    const { firstName, lastName, ageCat, eventId } = req.body[0];
    // create boulders
    const boulder1 = await Boulder.create().save();
    const boulder2 = await Boulder.create().save();
    const boulder3 = await Boulder.create().save();
    const boulder4 = await Boulder.create().save();
    //create scorecard
    const scoreCard = await ScoreCard.create({
      boulder1,
      boulder2,
      boulder3,
      boulder4,
    }).save();
    //link score card to athlete
    const newAthlete: Athlete = await Athlete.create({
      firstName,
      lastName,
      ageCat,
      scoreCard,
    }).save();
    // todo: add athlete to event
    const currentEvent = await Event.findOne({ where: { id: eventId } });
    let currentAthletes = currentEvent?.athletes;
    if (currentAthletes?.length === undefined) {
      currentAthletes = [newAthlete];
    } else {
      currentAthletes?.push(newAthlete);
    }

    await getConnection()
      .createQueryBuilder()
      .update(Event)
      .set({
        ...currentEvent,
        athletes: currentAthletes,
      })
      .where("id = :id", { id: eventId })
      .execute();
    res.send({
      ageCat: newAthlete.ageCat,
      id: newAthlete.id,
    });
  });

  app.post("/verifyScoreKeeper", async (req, res) => {
    const { eventCode, boulderNumber } = req.body;
    const event: Event | undefined = await Event.findOne({
      where: { scoreKeeperCode: eventCode },
    });
    if (event === undefined) {
      res.sendStatus(500);
    }
    console.log(boulderNumber);
  });

  wss.on("connection", async (ws: WebSocket) => {
    console.log("client connection established");
    ws.send("hey client");

    // setInterval(() => {
    //   ws.send(time)
    // })
  });

  // wss.on("listening", async(ws: WebSocket) => {
  //   ws.send
  // })

  server.listen(5000, () => {
    console.log("server running on port 5000");
  });

  // app.listen(port, () => {
  //   console.log("App running on port 5000");
  // });
})();
