function nextPalindrome(num) {
  //your JS code here.
	for(let i=Number(num)+1;;i++)
		{
			let isPalindrome= checkPalindrome(i)
			if(isPalindrome)
			{
				return i
			}
		}
}

function checkPalindrome(n)
{
	let str=String(n)
	let arr=str.split("")
	for(let i=0;i<arr.length;i++)
		{
			for(let j=arr.length-1;j>=0;j--)
				{
					if(arr[i]!=arr[j])
					{
						return false
					}
				}
		}
	return true
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
