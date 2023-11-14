const { DB_PASS } = process.env;
// const username = process.env.username;

export const connectionStr ="mongodb+srv://root:" + DB_PASS +"@cluster0.gvd98cw.mongodb.net/canteen?retryWrites=true&w=majority";
