/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2020 Photon Storm Ltd.
 * @license      {@link https://opensource.org/licenses/MIT|MIT License}
 */

/**
 * Shallow Object Clone. Will not clone nested objects.
 *
 * @function Phaser.Utils.Objects.Clone
 * @since 3.0.0
 *
 * @param {object} obj - The object to clone.
 *
 * @return {object} A new object with the same properties as the input object.
 */
const Clone = obj => {
  const clone = {}

  for (const key in obj) {
    if (Array.isArray(obj[key])) {
      clone[key] = obj[key].slice(0)
    } else {
      clone[key] = obj[key]
    }
  }

  return clone
}

export default Clone
