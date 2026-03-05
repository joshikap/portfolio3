/**
 * GameLevelTreasureIsland
 * -----------------------------------------
 * Mini RPG level configuration for GameBuilder.
 * This level demonstrates a basic environment with:
 *  - One Background
 *  - One Player (custom sprite)
 *  - One NPC with dialogue
 *  - One Barrier obstacle
 *
 * Purpose:
 * Introduce movement, interaction, and collision mechanics.
 */

import GameEnvBackground from '/assets/js/GameEnginev1/essentials/GameEnvBackground.js';
import Player from '/assets/js/GameEnginev1/essentials/Player.js';
import Npc from '/assets/js/GameEnginev1/essentials/Npc.js';
import Barrier from '/assets/js/GameEnginev1/essentials/Barrier.js';

class GameLevelTreasureIsland {

    /**
     * Constructor initializes all game objects.
     * @param {GameEnv} gameEnv - Game environment context
     */
    constructor(gameEnv) {

        const path = gameEnv.path;

        /**
         * Background Object
         * ---------------------------
         * Purpose:
         * Creates the visual environment for the level.
         *
         * Key Decisions:
         * - Used a cloud themed background for a light exploration feel.
         * - Sized to match standard 1280x720 game environment.
         */
        const bgData = {
            name: "treasure_bg",
            src: path + "/images/gamebuilder/bg/clouds.jpg",
            pixels: { height: 720, width: 1280 }
        };

        /**
         * Player Object
         * ---------------------------
         * Purpose:
         * Main controllable character that the user moves around the map.
         *
         * Key Decisions:
         * - Custom knight sprite used instead of slime.
         * - WASD controls for movement.
         * - Positioned near the left side of the map to encourage exploration.
         */
        const playerData = {
            id: 'playerKnight',

            // NEW SPRITE
            src: path + "/images/gamebuilder/sprites/knight.png",

            SCALE_FACTOR: 4,
            STEP_FACTOR: 1000,
            ANIMATION_RATE: 50,

            INIT_POSITION: { x: 120, y: 350 },

            pixels: { height: 256, width: 256 },

            orientation: { rows: 4, columns: 4 },

            down: { row: 0, start: 0, columns: 3 },
            right: { row: 1, start: 0, columns: 3 },
            left: { row: 2, start: 0, columns: 3 },
            up: { row: 3, start: 0, columns: 3 },

            hitbox: { widthPercentage: 0.2, heightPercentage: 0.2 },

            keypress: {
                up: 87,    // W
                left: 65,  // A
                down: 83,  // S
                right: 68  // D
            }
        };

        /**
         * NPC Object
         * ---------------------------
         * Purpose:
         * Interactive robot NPC that provides hints to the player.
         *
         * Key Decisions:
         * - Positioned near center of map so player discovers it easily.
         * - Dialogue gives story context.
         */
        const npcData1 = {

            id: 'TreasureRobot',

            greeting: 'Greetings explorer!',

            src: path + "/images/gamify/r2_idle.png",

            SCALE_FACTOR: 8,
            ANIMATION_RATE: 50,

            INIT_POSITION: { x: 600, y: 350 },

            pixels: { height: 223, width: 505 },

            orientation: { rows: 1, columns: 3 },

            down: { row: 0, start: 0, columns: 3 },

            hitbox: { widthPercentage: 0.1, heightPercentage: 0.2 },

            dialogues: [
                "Greetings explorer!",
                "Legend says treasure is hidden beyond the rocks.",
                "Try exploring the edges of the island."
            ],

            reaction: function() {
                if (this.dialogueSystem) {
                    this.showReactionDialogue();
                }
            },

            interact: function() {
                if (this.dialogueSystem) {
                    this.showRandomDialogue();
                }
            }
        };

        /**
         * Barrier Object
         * ---------------------------
         * Purpose:
         * Physical obstacle that blocks player movement.
         *
         * Key Decisions:
         * - Placed on the right side of the map
         * - Prevents player from leaving the playable area
         */
        const barrier1 = {

            id: "rockBarrier",

            x: 850,
            y: 320,

            width: 200,
            height: 120,

            visible: true,

            hitbox: {
                widthPercentage: 0.0,
                heightPercentage: 0.0
            }
        };

        /**
         * Class registration
         * ---------------------------
         * Defines which objects appear in the level.
         */
        this.classes = [

            { class: GameEnvBackground, data: bgData },

            { class: Player, data: playerData },

            { class: Npc, data: npcData1 },

            { class: Barrier, data: barrier1 }

        ];
    }
}

export const gameLevelClasses = [GameLevelTreasureIsland];