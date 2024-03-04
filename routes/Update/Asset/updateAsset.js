// Read the asset and performance collectiopnand show the records of an ass
import { Router } from "express";
import assetModel from "../../../models/assetModel.js";

const router = Router();
router.put("/api/update/asset/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.body);
    const asset = await assetModel.findOneAndUpdate({ asset_id: id }, req.body);
    if (!asset) {
      res.status(404).json({ response: "ASSET DOES NOT EXIST!" });
      return;
    }
    // cross check
    const updatedAsset = await assetModel.findOne({ asset_id: id });
    console.log(`ASSET ${id} UPDATED SUCCESSFULLY`);

    res.status(200).json(updatedAsset);
  } catch (err) {
    console.log("Request Error!");
    res.status(500).json({ err: "Internal Server Error" });
  }
});

export default router;
