import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// import the models - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import assetModel from "./models/assetModel.js";
import operationalStatusModel from "./models/statusModel.js";
import assetTypeModel from "./models/typeModel.js";
import performanceModel from "./models/performanceModel.js";
import userModel from "./models/userModel.js";
// import the api endpoints - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// CREATE END POINTS- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import addAssetRoute from "./routes/Create/Asset/addAsset.js";
import addAssetTypeRoute from "./routes/Create/Asset/addAssetType.js";
import addOprStsRoute from "./routes/Create/Asset/addAssetOprSts.js";
import addPerformanceRoute from "./routes/Create/Performance/addAssetPerformance.js";
import addUserRoute from "./routes/Create/User/addUser.js";
// SHOW ENDPOINTS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import viewAllAssetRoute from "./routes/Read/Asset/viewAllAssets.js";
import viewAllTypeRoute from "./routes/Read/Asset/viewAssetType.js";
import viewAllStatusRoute from "./routes/Read/Asset/viewOprnSts.js";
import viewSpecificAssetRoute from "./routes/Read/Asset/viewSpecificAsset.js";
import viewAllPerformanceRoute from "./routes/Read/Performance/viewAllPerformance.js";
import viewSpecificPerformanceRoute from "./routes/Read/Performance/viewSpecificPerformance.js";
import viewAllUsersRoute from "./routes/Read/User/viewAllUser.js";
import viewSpecificUserRoute from "./routes/Read/User/viewSpecificUser.js";
// UPDATE ENDPOINTS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import updateAssetRoute from "./routes/Update/Asset/updateAsset.js";
import updateTypeRoute from "./routes/Update/Asset/updateAssetType.js";
import updateStatusRoute from "./routes/Update/Asset/updateOprnSts.js";
import updatePerformanceRoute from "./routes/Update/Performance/updatePerformance.js";
import updateUserRoute from "./routes/Update/User/updateUser.js";
// DELETE ENDPOINTS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import deleteAssetCascadeRoute from "./routes/Delete/Asset/deleteAssetCascade.js";
import deletePerformanceRoute from "./routes/Delete/Performance/deletePerformance.js";
import deleteAssetRoute from "./routes/Delete/Asset/deleteAsset.js";
import deleteTypeRoute from "./routes/Delete/Asset/deleteAssetType.js";
import deleteStatusRoute from "./routes/Delete/Asset/deleteOprnSts.js";
import deleteUserRoute from "./routes/Delete/User/deleteUser.js";
// INSIGHT ENDPOINTS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import avgDTRoute from "./routes/Aggregation/avgDowntime.js";
import totalMNTRoute from "./routes/Aggregation/totalMaintainanceCost.js";
import highFRRoute from "./routes/Aggregation/highFR.js";
// SENSITIVE ENDPOINTS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
import sensitiveRoute from "./routes/Authorization/sensitveEndpoint.js";
import { Duplex } from "stream";
// Create the app - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to Mongo DB - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
mongoose
  .connect("mongodb://127.0.0.1:27017/Project_Dashboard")
  .then(() => {
    console.log("DB Connected Good to Go");
  })
  .catch((err) => console.log(`DB Connection Falied ${err}`));
// Handeling the endpoints - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
app.use("/", addAssetRoute);
app.use("/", addAssetTypeRoute);
app.use("/", addOprStsRoute);
app.use("/", addPerformanceRoute);
app.use("/", addUserRoute);
//-----------------------------------------------------------------
app.use("/", viewAllAssetRoute);
app.use("/", viewSpecificAssetRoute);
app.use("/", viewAllTypeRoute);
app.use("/", viewAllStatusRoute);
app.use("/", viewAllPerformanceRoute);
app.use("/", viewSpecificPerformanceRoute);
app.use("/", viewAllUsersRoute);
app.use("/", viewSpecificUserRoute);
//---------------------------------------------
app.use("/", updateAssetRoute);
app.use("/", updateTypeRoute);
app.use("/", updateStatusRoute);
app.use("/", updatePerformanceRoute);
app.use("/", updateUserRoute);
//-------------------------------------------------
app.use("/", deleteAssetCascadeRoute);
app.use("/", deleteAssetRoute);
app.use("/", deletePerformanceRoute);
app.use("/", deleteTypeRoute);
app.use("/", deleteStatusRoute);
app.use("/", deleteUserRoute);
//---------------------------------------------------------
app.use("/", avgDTRoute);
app.use("/", totalMNTRoute);
app.use("/", highFRRoute);
//----------------------------------------------------------
app.use("/", sensitiveRoute);
// Starting the Server - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
app.listen(port, () => {
  console.log(`Yup Server Up and running at Port : ${port}`);
});
