import { pgTable, serial, integer, text, boolean, numeric, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const equipmentTable = pgTable("equipment", {
  id: serial("id").primaryKey(),
  unitNumber: integer("unit_number"),
  name: text("name").notNull(),
  description: text("description"),
  price7day: numeric("price_7day", { precision: 12, scale: 2 }).notNull().default("0"),
  price14day: numeric("price_14day", { precision: 12, scale: 2 }).notNull().default("0"),
  price30day: numeric("price_30day", { precision: 12, scale: 2 }).notNull().default("0"),
  available: boolean("available").notNull().default(true),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertEquipmentSchema = createInsertSchema(equipmentTable).omit({ id: true, createdAt: true });
export type InsertEquipment = z.infer<typeof insertEquipmentSchema>;
export type Equipment = typeof equipmentTable.$inferSelect;
