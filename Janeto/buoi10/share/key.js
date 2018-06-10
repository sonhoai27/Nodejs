const KEY = "UsKabf2YDnp9KdN5xzyGvVxCK060A-rhdK-om_IuzWhnsE0g04_-BfF9n2gNKyQs8OvCU4L7SrA1UVxmSPE2xcocB6v8OZ1rQO6Rf7j-6eslkoK2y3eB4eUwUsC73CwM8g0cflghoqWb8Bcm3N9BpklpKbbAa0NExZp8SZIZ3zOKfESLR54cdLJcpFMakvCOEoLXAUX0HtvxRwdMPHl4XJBdJ63FPEksDC8B-ZIxamluTWB9Qv8UEVx92Nipzzb2m9-3IvoeNB5Y2UJ6njWJFbl_UgvkjJFIcFl0EWeXeRpuA6sdiibxIeyu15Erth4UsPIYuKhjycjp5mWPuDLeaQ"
const KEYJWT = "tgO9GWdJ6Hc0Qte2wpp_l0kc8GFzAvi312RPTsbVg7ejxjUeW4jOcEdekVIbrER8v8oCJDaX6yMToGGFUP_Myisf7jMmN6p5_mIlY9svVcfUEDANLhNXUj_z1bUghjksY9gFzYITFBZtYGzJO7dgiCy8lGpfokmxZpyg0m28OqSezE6X_eO8-f3xii755UqvQmCZxT2ijzFX08SfCr6X4bJKOTSrYIzn-RTueBWlEphEqgAnKFhASjw4YwEDsTEmBd08Cu1Gjvcj23BwHzeg-GF2QJSnB5QUG85ZdKIYSQK6aE2H40w78tx1oEYQgKM0ROE27G9IglOkIKdlNINC8w"
const SALTBCRYPT = 10
const KEY_API = "/api"

const generateCode = (lenght = 20) => {
    const text = "1234567890QWETYUIOPLKJHGFDSAZXCVBNM0987654321OUTVHSVHVCSAHHAVHAJAVhsvbashvahsvahvsgac68348383njfbbd85u84yUjjdfbhjds"
    var result = ''
    for (i = 0; i < lenght; i++) {
        result += text[Math.floor((Math.random() * text.length) + 1)]
    }
    return result
}
module.exports = {
    KEY,
    KEYJWT,
    SALTBCRYPT,
    generateCode,
    KEY_API
}