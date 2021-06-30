var intersect = function (nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    let jiao = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] == nums2[j]) {
            jiao.push(nums1[i]);
            i++;
            j++;
        }
        else nums1[i] < nums2[j] ? i++ : j++;
    }
    return jiao;
}
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
