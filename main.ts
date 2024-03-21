/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */

//% color="#c77398" weight=100
namespace multicamera {
    //% block
    export function triangulate (sprite: Sprite, otherSprite: Sprite) {
    scene.centerCameraAt((sprite.x + otherSprite.x) / 2, (sprite.y + otherSprite.y) / 2)
    }

    // note that Caml casing yields lower case
    // Triangulates the camera based on two sprites.
}
