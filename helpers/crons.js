const CronJob = require("cron").CronJob;
const { start } = require("repl");
const config = require("../config/config");
const { emailService, userService } = require("../services");
const { User } = require("../model");

// server runing on every 3 second
// new CronJob(
//     "*/3 * * * * *",
//     function () {
//         console.log("It's running on every 3 seconds.")
//     },
//     null,
//     false,
//     "Asia/Kolkata"
// ).start();

// Send mail
new CronJob(
    "15 14 * * *",
    function () {
        emailService.sendMail(
            "valarenuka32@gmail.com",
            "Blasing message",
            "Good morning Renuka,Have a nice day"
        );
    },
    null,
    false,
    "Asia/Kolkata"
).start();

// Multiple email send
new CronJob(
    "15 15 * * *",
    async () => {
        const userDetails = await userService.userList();
        const userEmail = [];
        for (let ele of userDetails) {
            userEmail.push(ele.email);
        }
        await emailService.sendMail(
            userEmail,
            "Blasing message",
            "Good morning Renuka,Have a great day"
        );
    },
    null,
    false,
    "Asia/Kolkata"
).start();