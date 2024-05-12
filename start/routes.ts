/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.post("/auth/register", "RegistersController.register");
  Route.post("/auth/login", "RegistersController.login");

  Route.post("/pegawais", "PegawaisController.store").middleware("auth");
  Route.put("/pegawais/:id", "PegawaisController.update").middleware("auth");
  Route.delete("/pegawais/:id", "PegawaisController.destroy").middleware(
    "auth"
  );
  Route.get("/pegawais/", "PegawaisController.index");
  Route.get("/pegawais/:id", "PegawaisController.show");
}).prefix("/api");
