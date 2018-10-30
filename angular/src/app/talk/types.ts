import { Speaker } from "../speaker/types";
import { Conference } from "../conference/types";

export class Talk {
  conferences?: Conference[];
  description: string;
  id: string;
  room: string;
  speaker?: Speaker;
  startsAt: string;
  title: string;
}
