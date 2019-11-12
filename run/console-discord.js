const Discord = require("discord.js");
const Commands = require("../src/modules/CommandList");
const index = require("../src/index");
const Logger = require("../src/modules/Logger");
var Entity = require('../src/entity');
var GameMode = require('../src/gamemodes');


var fs = require('fs');

const config = {
    role: "owner",
    token: "NTc2Nzg5NDk1MjI4MTM3NDgz.XNbrLQ.EEMetm8CNazk3SGS2Dsf1ZSKSUw"
};

                function getPos(client) {
                    for (var i = 0; i < client.cells.length; i++) {
                        if (!client.cells[i]) continue;
                        return {
                            x: client.cells[i].position.x / client.cells.length,
                            y: client.cells[i].position.y / client.cells.length
                        }
                    }
                }
                function getScore(client) {
                    var score = 0; // reset to not cause bugs
                    for (var i = 0; i < client.cells.length; i++) {
                        if (!client.cells[i]) continue;
                        score += client.cells[i]._mass;
                    }
                    return score;
                };
                function getName(name) {
                    if (!name.length)
                        name = "An unnamed cell";
                    return name.trim();
                }
                var fillChar = function (data, char, fieldLength, rTL) {
                    var result = data.toString();
                    if (rTL === true) {
                        for (var i = result.length; i < fieldLength; i++)
                            result = char.concat(result);
                    } else {
                        for (var i = result.length; i < fieldLength; i++)
                            result = result.concat(char);
                    }
                    return result;
                };
class Bot {
    constructor() {
        this.client = new Discord.Client();
        global.client2 = this.client;
        this.client.on("message", this.onMessage.bind(this));
        this.client.on("ready", this.onReady.bind(this));
        process.on("error", this.onError.bind(this));
        this.client.login(config.token);
        process.setMaxListeners(0)
    };onMessage(message) {
        const args = message.content.split(/\s+/g);
        var execute = Commands.list[args[0]];
        if (typeof execute != 'undefined' && message.member.roles.some(r => [config.role].includes(r.name))) {
            execute(index.gameServer, args);
            message.delete();
            if (message.content.startsWith("s ")) {
                message.channel.send(speed2);
            } else if (message.content == "s") {
                message.channel.send(speed2);
            } else if (message.content.startsWith("speed ")) {
                message.channel.send(speed2);
            } else if (message.content == "speed") {
                message.channel.send(speed2);
            } else if (message.content.startsWith("help")) {
                message.channel.send(help2);
                message.channel.send(help21);
                message.channel.send(help22);
            } else if (message.content.startsWith("debug")) {
                message.channel.send(debug);
            } else if (message.content.startsWith("shortcuts")) {
                message.channel.send(shortcut2);
            } else if (message.content.startsWith("reset")) {
                if (reset1t = true) {
                    message.channel.send(reset1);
                    reset1t = false;
                } else if (reset2t = true) {
                    message.channel.send(reset2);
                    reset2t = false;
                } else if (reset3t = true) {
                    message.channel.send(reset3);
                    reset3t = false;
                } else if (reset4t = true) {
                    message.channel.send(reset4);
                    reset4t = false;
                }
            } else if (message.content.startsWith("minion")) {
                message.channel.send(minion1);
            } else if (message.content.startsWith("ban") && (!message.content.startsWith("banlist"))) {
                message.channel.send(ban2);
            } else if (message.content.startsWith("banlist")) {
                message.channel.send(banlist1);
                message.channel.send(banlist2);
                message.channel.send(banlist4);
                message.channel.send(banlist3);
            } else if (message.content.startsWith("addbot")) {
                message.channel.send(addbot1);
            } else if (message.content.startsWith("kickbot")) {
                message.channel.send(kickbot1);
            } else if (message.content.startsWith("board")) {
                message.channel.send(board1);
            } else if (message.content.startsWith("change")) {
                message.channel.send(change1);
            } else if (message.content.startsWith("clear")) {
                message.channel.send(clear1);
                message.channel.send(clear2);
                message.channel.send(clear3);
            } else if (message.content.startsWith("color")) {
                message.channel.send(color1);
            } else if (message.content.startsWith("exit")) {
                message.channel.send(exit1);
            } else if (message.content.startsWith("restart")) {
                message.channel.send(restart1);
            } else if ((message.content.startsWith("kick")) && (!message.content.startsWith("kickall"))) {
                message.channel.send(kick1);
            } else if (message.content.startsWith("mute")) {
                message.channel.send(mute1);
            } else if (message.content.startsWith("unmute")) {
                message.channel.send(unmute1);
            } else if (message.content.startsWith("kickall")) {
                message.channel.send(kickall1);
            } else if (message.content.startsWith("kill")) {
                message.channel.send(kill1);
            } else if (message.content.startsWith("killall")) {
                message.channel.send(killall1);
            } else if (message.content.startsWith("mass")) {
                message.channel.send(mass1);
            } else if (message.content.startsWith("spawnmass")) {
                message.channel.send(spawnmass1);
            } else if (message.content.startsWith("merge")) {
                message.channel.send(merge1);
            } else if (message.content.startsWith("rec")) {
                message.channel.send(rec1);
            } else if (message.content.startsWith("skin")) {
                message.channel.send(skin1);
            } else if (message.content.startsWith("name")) {
                message.channel.send(name1);
            } else if (message.content.startsWith("split")) {
                message.channel.send(split1);
            } else if (message.content.startsWith("unban")) {
                message.channel.send(unban1);
            } else if (message.content.startsWith("pause")) {
                message.channel.send(pause1);
            } else if (message.content.startsWith("freeze")) {
                message.channel.send(freeze1);
            } else if (message.content.startsWith("restart")) {
                message.channel.send(restart1);
            } else if (message.content.startsWith("status")) {
                message.channel.send(status1);
            } else if (message.content.startsWith("tp")) {
                message.channel.send(tp1);
            } else if (message.content.startsWith("chat")) {
                message.channel.send(chat1);
            } else if (message.content.startsWith("spawn")) {
                message.channel.send(spawn1);
            } else if (message.content.startsWith("replace")) {
                message.channel.send(replace1);
            } else if (message.content.startsWith("pop")) {
                message.channel.send(pop1);
            } else if (message.content.startsWith("explode")) {
                message.channel.send(explode1);
            } else if (message.content.startsWith("lms")) {
                message.channel.send(calc1);
            } else if (message.content.startsWith("calc")) {
                message.channel.send(calc1);
            } else if ((message.content.startsWith("playerlist")) || (message.content = "pl")) {
                  playerlist(index.gameServer, args);
                  function playerlist(gameServer, split) {
                        if (!gameServer.clients.length) message.channel.send("```No bots or players are currently connected to the server!```");
                            global.playerlist2 = "```\nCurrent players: " + gameServer.clients.length + "\n" +
                            'Do "playerlist m" or "pl m" to list minions\n' + 
                            " ID     | IP              | P | CELLS | SCORE  |   POSITION   | " + fillChar('NICK', ' ', gameServer.config.playerMaxNickLength) + " \n" +
                            fillChar('', '─', ' ID     | IP              | CELLS | SCORE  |   POSITION   |   |  '.length + gameServer.config.playerMaxNickLength) + "```";
                            message.channel.send(playerlist2);
                            global.sockets = gameServer.clients.slice(0);
                            sockets.sort(function (a, b) {
                                return a.playerTracker.pID - b.playerTracker.pID;
                            });
                            for (global.i = 0; i < sockets.length; i++) {
                                global.socket = sockets[i];
                                global.client = socket.playerTracker;
                                global.type = split[1];

                                // ID with 3 digits length
                                global.id = fillChar((client.pID), ' ', 6, true);

                                // Get ip (15 digits length)
                                global.ip = client.isMi ? "[MINION]" : "[BOT]";
                                if (socket.isConnected && !client.isMi) {
                                    ip = socket.remoteAddress;
                                } else if (client.isMi && type != "m") {
                                    continue; // do not list minions
                                }
                                ip = fillChar(ip, ' ', 15);

                                // Get name and data
                                global.protocol = gameServer.clients[i].packetHandler.protocol;
                                if (!protocol) protocol = "?";
                                global.nick = ''
                                global.cells = ''
                                global.score = ''
                                global.position = ''
                                global.data = ''
                                if (socket.closeReason != null) {
                                    // Disconnected
                                    global.reason = "[DISCONNECTED] ";
                                    if (socket.closeReason.code)
                                        reason += "[" + socket.closeReason.code + "] ";
                                    if (socket.closeReason.message)
                                        reason += socket.closeReason.message;
                                    message.channel.send("``` " + id + " | " + ip + " | " + protocol + " | " + reason + "```");
                                } else if (!socket.packetHandler.protocol && socket.isConnected && !client.isMi) {
                                    message.channel.send("``` " + id + " | " + ip + " | " + protocol + " | " + "[CONNECTING]```");
                                } else if (client.spectate) {
                                    nick = "in free-roam";
                                    if (!client.freeRoam) {
                                        global.target = client.getSpecTarget();
                                        if (target) nick = getName(target._name);
                                    }
                                    data = fillChar("SPECTATING: " + nick, '-', ' | CELLS | SCORE  | POSITION    '.length + gameServer.config.playerMaxNickLength, true);
                                    message.channel.send("``` " + id + " | " + ip + " | " + protocol + " | " + data + "```");
                                } else if (client.cells.length) {
                                        nick = fillChar(getName(client._name), ' ', gameServer.config.playerMaxNickLength);
                                        cells = fillChar(client.cells.length, ' ', 5, true);
                                        score = fillChar(getScore(client) >> 0, ' ', 6, true);
                                        position = fillChar(getPos(client).x >> 0, ' ', 5, true) + ', ' + fillChar(getPos(client).y >> 0, ' ', 5, true);
                                        message.channel.send("``` " + id + " | " + ip + " | " + protocol + " | " + cells + " | " + score + " | " + position + " | " + nick + "```");
                                } else {
                                    // No cells = dead player or in-menu
                                    data = fillChar('DEAD OR NOT PLAYING', '-', ' | CELLS | SCORE  | POSITION    '.length + gameServer.config.playerMaxNickLength, true);
                                    message.channel.send("``` " + id + " | " + ip + " | " + protocol + " | " + data + "```");
                                }
                            }
                        }
                }
        } else {
            return;
        }
    };
    onReady() {
        Logger.info(`Successfully logged in.`);
        this.client.user.setActivity("FreeForAll");
        client2.channels.get('575389235226476545').send("**Server Started: FFA**" + "```" + "3000" + "\n" + currentgamemode2 + "\n" + bot1 + "```" ) //listening on port port
        client2.channels.get('575389368865390592').send("**Server Started: FFA**")
    };

    onError(error) {
        Logger.error(`The bot has encountered an error while running:\n${error}`);
    };
};

new Bot;
