# MultiOgar-Edited For Heroku

This is different from the original multiogar because it has changes to allow easier remote console access and More access on heroku.
# starting the server
Since it is ment for heroku the port is going to default to process.env.PORT. So if you don't want that you will have to change it.
To start the server its just like the normal multiogar, you have to run the command `npm start`. 



# Multiogar help discord
[![Discord](https://discord.gg/66X2ESb)


>---

# Information
Current version : **1.0**
Current Multiogar Base Version : **1.6.2**

[![License](https://img.shields.io/badge/license-APACHE2-blue.svg)](https://github.com/Barbosik/OgarMulti/blob/master/LICENSE.md)

# Remote Console
The remote console is easier than the one provided and only uses 1 websocket!
To use it you will have to go into the folder 'src' then open auth.json and fill the options in.
Once you do that all you have to do is start the server. And after you start the server go to https://YOURHEROKUAPP.herokuapp.com/ and it will ask you for login and then give you the console!
## Features of the console
If you login correctly once, it autosaves and will auto log you in the next time it reloads. If you fail to login it brings you to a page telling you that the login was unsucessful.





# Discord console

If you would like to allow a moderator to get direct access to your server's commands, you may want to set up a Discord bot on your server.

The setup is very simple, all you need is a Discord App Token and a role on your server.
Both can be specified in the config within the file.

After this is complete just run the `npm run discord` command and your server will start along with the bot.
