import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories"


class CreateTagService {

     async execute(name: string) {
          const tagsRepositories = getCustomRepository(TagsRepositories);

          if (!name) {
               throw new Error("No name provided");
          }

          const tagAlredyExists = await tagsRepositories.findOne({ name });

          if (tagAlredyExists) {
               throw new Error("Tag already exists");
          }

          const tag = await tagsRepositories.create({ name });

          await tagsRepositories.save(tag);

          return tag;
     }

}

export { CreateTagService };