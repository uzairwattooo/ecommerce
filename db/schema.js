import {
    pgTable,
    text,
    integer,
    boolean,
    timestamp,
} from "drizzle-orm/pg-core";

export const products = pgTable("products", {
    id: text("id").primaryKey(),

    name: text("name").notNull(),
    description: text("description"),

    basePrice: integer("base_price").notNull(),
    oldPrice: integer("old_price"),

    discountPercent: integer("discount_percent"),

    categoryId: text("category_id"),

    ratingCount: integer("rating_count").default(0),

    createdAt: timestamp("created_at").defaultNow(),
    isFlashSale: boolean("is_flash_sale").default(false),
    isBestSelling: boolean("is_best_selling").default(false),
    isFeatured: boolean("is_featured").default(false),
});

/* =========================
   PRODUCT IMAGES (MULTIPLE IMAGES + COLOR SUPPORT)
   ========================= */
export const productImages = pgTable("product_images", {
    id: text("id").primaryKey(),

    productId: text("product_id")
        .notNull()
        .references(() => products.id, { onDelete: "cascade" }),

    imageUrl: text("image_url").notNull(),

    color: text("color"), // optional (for color variants)

    isPrimary: boolean("is_primary").default(false),
});

/* =========================
   PRODUCT VARIANTS (COLOR + SIZE + STOCK)
   ========================= */
export const productVariants = pgTable("product_variants", {
    id: text("id").primaryKey(),

    productId: text("product_id")
        .notNull()
        .references(() => products.id, { onDelete: "cascade" }),

    color: text("color"),
    size: text("size"),

    price: integer("price"),
    stock: integer("stock").default(0),

    imageUrl: text("image_url"),
});

/* =========================
   REVIEWS SYSTEM
   ========================= */
export const productReviews = pgTable("product_reviews", {
    id: text("id").primaryKey(),

    productId: text("product_id")
        .notNull()
        .references(() => products.id, { onDelete: "cascade" }),

    userId: text("user_id").notNull(),

    rating: integer("rating").notNull(), // 1 - 5
    comment: text("comment"),

    createdAt: timestamp("created_at").defaultNow(),
});

/* =========================
   CART SYSTEM
   ========================= */
export const cart = pgTable("cart", {
    id: text("id").primaryKey(),

    userId: text("user_id").notNull(),

    productId: text("product_id").notNull(),

    variantId: text("variant_id"),

    quantity: integer("quantity").default(1),
});

/* =========================
   ORDERS
   ========================= */
export const orders = pgTable("orders", {
    id: text("id").primaryKey(),

    userId: text("user_id").notNull(),

    totalPrice: integer("total_price").notNull(),

    status: text("status").default("pending"), // pending, paid, shipped, cancelled

    createdAt: timestamp("created_at").defaultNow(),
});

/* =========================
   ORDER ITEMS
   ========================= */
export const orderItems = pgTable("order_items", {
    id: text("id").primaryKey(),

    orderId: text("order_id")
        .notNull()
        .references(() => orders.id, { onDelete: "cascade" }),

    productId: text("product_id").notNull(),

    variantId: text("variant_id"),

    quantity: integer("quantity").notNull(),

    price: integer("price").notNull(),
});

/* =========================
   CATEGORIES
   ========================= */
export const categories = pgTable("categories", {
    id: text("id").primaryKey(),

    name: text("name").notNull(),

    icon: text("icon"),

    slug: text("slug").notNull(),
});

export const siteSettings = pgTable("site_settings", {
  id: text("id").primaryKey(),
  flashSaleEndTime: timestamp("flash_sale_end_time"),
});