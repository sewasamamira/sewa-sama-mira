import { pgTable, serial, text, integer, numeric, timestamp, pgEnum, json } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { equipmentTable } from "./equipment";

export const rentalStatusEnum = pgEnum("rental_status", ["active", "returned", "overdue"]);

export const rentalsTable = pgTable("rentals", {
  id: serial("id").primaryKey(),
  renterName: text("renter_name").notNull(),
  phoneNumber: text("phone_number").notNull(),
  address: text("address").notNull(),
  equipmentId: integer("equipment_id").notNull().references(() => equipmentTable.id),
  durationDays: integer("duration_days").notNull(),
  totalPrice: numeric("total_price", { precision: 12, scale: 2 }).notNull(),
  status: rentalStatusEnum("status").notNull().default("active"),
  startDate: timestamp("start_date").notNull(),
  endDate: timestamp("end_date").notNull(),
  notes: text("notes"),
  returnedAt: timestamp("returned_at"),
  extensionHistory: json("extension_history").$type<Array<{
    extendedAt: string;
    previousEndDate: string;
    previousDurationDays: number;
    previousTotalPrice: number;
    addedDays: number;
    addedPrice: number;
  }>>().notNull().default([]),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertRentalSchema = createInsertSchema(rentalsTable).omit({ id: true, createdAt: true, totalPrice: true, endDate: true, status: true });
export type InsertRental = z.infer<typeof insertRentalSchema>;
export type Rental = typeof rentalsTable.$inferSelect;
