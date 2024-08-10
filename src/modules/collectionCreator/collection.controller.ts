import { Controller, Body, Post } from "@nestjs/common";
import { collectionCreator } from "./collection.service";
import { CollectionDto } from "./dto/CollectionDto.js";

@Controller()
export class CollectionController {
  constructor(private readonly appService: collectionCreator) {}

  @Post("generatecol")
  GetCollection(@Body() collection: CollectionDto) {
    return this.appService.createCollectionCall(collection);
  }
}