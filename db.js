import prompt from 'prompt-async';
import pg from 'pg';
const { Client } = pg;
const client = new Client({
    connectionString: 'postgresql://neondb_owner:npg_0pgwJMCOrht1@ep-frosty-fire-a94nhe0n-pooler.gwc.azure.neon.tech/neondb?sslmode=require'
});
async function getDataFromDB() {
    await client.connect()
    const { rows } = await client.query('Select * from students');
    console.log(rows)
    await client.end();
}
// data = { first_name, last_name, phone_number, mark }
async function insertDataIntoDB(data) {
    await client.connect()
    const queryText = 'INSERT INTO students(first_name, last_name, phone_number, mark) VALUES($1, $2, $3, $4)'
    const res = await client.query(queryText, [data.first_name, data.last_name, data.phone_number, data.mark])
    console.log(res)
    await client.end();
}
async function getDataFromConsole() {
    prompt.start();
    const {username, email} = await prompt.get(["username", "email"]);
    // Log the results.
    console.log("Command-line input received: ");
    console.log(  username: ${username},);
    console.log(  email: ${email},);
    return email;
}
async function main() {
    let email = '123';
    do {
        email = await getDataFromConsole();
        console.log({ email }, typeof email);
    } while (email === '123')
}
main()
// getData();
//   try {
//     await insertData({
//         first_name: result.first_name,
//         last_name: result.last_name,
//         phone_number: result.phone_number,
//         mark: result.mark
//     });
//   } catch (error) {
//     console.error(error.message)
//   }
