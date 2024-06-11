#leetcode 1233 js
/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    folder.sort((a, b) => a.length - b.length);
        const res = [];
        for (const f of folder) {
            let flag = true;
            for (let i = 2; i < f.length; i++) {
                if (f[i] === '/' && res.includes(f.substring(0, i))) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                res.push(f);
            }
        }
        return res;
};
