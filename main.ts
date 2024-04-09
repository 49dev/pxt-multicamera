/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#c77398" weight=100
namespace multicamera {
    /**
     * Triangulates the position of the camera based on locations of 2 sprites.
     *
     * @param mySprite The first sprite
     * @param mySprite2 The second sprite
     */
    //% blockId=muticamera_triangulatetwosprites
    //% block="triangulate $mySprite and $mySprite2"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    export function triangulate2Sprites(mySprite: Sprite, mySprite2: Sprite) {
    scene.centerCameraAt((mySprite.x + mySprite2.x) / 2, (mySprite.y + mySprite2.y) / 2)
    }

    // note that Caml casing yields lower case
    // Triangulates the camera based on two sprites.
}
