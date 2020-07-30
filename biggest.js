// 给一个数字，得到由它分解的子数字乘积最大的数字。
 function biggest(n) {
    var k = 2;
	var a = [0];
	var i = 0;
	while(n >= k) //分解：从2开始减直到0 
	{
		a[i++] = k;
		n -= k;
		k++;
	}
	if(n) //如果差是0，则乘起来就可以得到结果，否则将差从后往前顺序分配 
	{
		if(n == a[i - 1])
		{
			a[i - 1]++;
			n --;
		}
		for(var j = 0;j < n;j++) //从后往前均匀分配 
		a[i - 1 - j]++;
	}
	var res = 1;
	for(var j = 0;j <=i - 1;j++)
	res *= a[j];
	return res;
 }
 console.log(biggest(12));