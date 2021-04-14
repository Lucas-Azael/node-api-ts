import * as path from "path";
import moduleAlias from "module-alias";

const files = path.join(__dirname, "../..");

moduleAlias.addAliases({
  "@src": path.join(files, "src"),
  "@test": path.join(files, "test"),
});
