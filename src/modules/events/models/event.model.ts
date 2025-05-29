import { Column, DataType, Model, Table } from 'sequelize-typescript';
import {
  EventModelSeedData,
  BuildEventModelSeedData,
} from '../seeds/event.seed';

@Table
export class EventModel extends Model<EventModel> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id?: number;

  @Column(DataType.TEXT)
  name: string;

  @Column(DataType.TEXT)
  description?: string;

  @Column(DataType.DATE)
  start?: Date;

  @Column(DataType.DATE)
  end?: Date;

  @Column(DataType.BOOLEAN)
  allDay?: boolean;

  public static async seed() {
    const seedData: EventModelSeedData[] = await BuildEventModelSeedData();

    const events: EventModel[] = [];
    for (const data of seedData) {
      const event: EventModel = await EventModel.create(data.event);
      events.push(event);
    }
    return events[0];
  }
}
