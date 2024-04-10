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
    //% blockId=multicamera_triangulatetwosprites
    //% block="triangulate camera $mySprite $mySprite2"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    export function triangulatetwosprites(mySprite: Sprite, mySprite2: Sprite) {
    scene.centerCameraAt((mySprite.x + mySprite2.x) / 2, (mySprite.y + mySprite2.y) / 2)
    }

    // note that Caml casing yields lower case
    // Triangulates the camera based on two sprites.

    /**
     * Triangulates the position of the camera based on locations of 3 sprites.
     *
     * @param mySprite The first sprite
     * @param mySprite2 The second sprite
     * @param mySprite3 The third sprite
     */
    //% blockId=multicamera_triangulatethreesprites
    //% block="triangulate camera $mySprite $mySprite2 $mySprite3"
    //% mySprite.shadow=variables_get
    //% mySprite.defl=mySprite
    //% mySprite2.shadow=variables_get
    //% mySprite2.defl=mySprite2
    //% mySprite3.shadow=variables_get
    //% mySprite3.defl=mySprite3
    export function triangulatethreesprites(mySprite: Sprite, mySprite2: Sprite, mySprite3: Sprite) {
    scene.centerCameraAt((mySprite.x + mySprite2.x + mySprite3.x) / 3, (mySprite.y + mySprite2.y + mySprite3.y) / 3)
    }
}
