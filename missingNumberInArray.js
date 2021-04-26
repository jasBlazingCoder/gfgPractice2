//https://practice.geeksforgeeks.org/problems/missing-number-in-array1416/1#
class Solution{
    MissingNumber(array,n){
        //code here
        let sum =0;
        for(let i=0;i<n-1;i++) {
            sum+=array[i];
        }
        let actualSum = (n*(n+1))/2;
        return actualSum-sum;
    }
}
