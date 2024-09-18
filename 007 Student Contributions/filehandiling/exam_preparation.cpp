#include<stdio.h>
int main(){
	// sum of digits
//    int i,num,sum=0,rem=0;
//    printf("Enter your value:");
//    scanf("%d",&num);
//    for(i=1;i<=num;i++){
//    	rem = num%10;
//    	sum = sum+rem;
//    	num = num/10;
//	}
//	printf("sum of digit:%d",sum);
   // numbers of reverse
//int num,sum=0,rem;
//printf("Enter your value:");
//scanf("%d",&num);
//while(num!=0){
//	rem = num%10;
//	sum = sum*10+rem;
//	num = num/10;
//}
//printf("sum of digits:%d",sum);
  // armstrong
//  int num;
//  printf("Enter your value:");
//  scanf("%d",&num);
//  int total = 0;
//  int rem;
//  int xn = num;
//  while(xn!=0){
//  	rem = xn%10;
//  	total = total+rem*rem*rem;
//  	xn = xn/10;
//  }
//  if(num == total){
//  	printf("yes it is a armstrong:");
//  }
//  else{
//  	printf("yes it is a not armstrong:");
//  }
  // fact program
//   int fact = 1;
//   for(int i=1;i<6;i++){
//   	  fact = fact*i;
//   }
//   printf("%d",fact);

 // palingdrom code
 int num,sum = 0,rem,xn;
    printf("Enter an integer:");
    scanf("%d", &num);
    xn = num;
 while(xn!=0){ 
	rem = num%10;
	sum = sum*10+rem;
	num = num/10;
}
if(xn == sum){
	printf("palindrom");
}
else{
	printf(" not palindrom");
}
//  int num, sum = 0, original, rem;
//    printf("Enter an integer: ");
//    scanf("%d", &num);
//    original = num;
//    while (num != 0) {
//        rem = num % 10;           
//        sum = sum * 10 + rem; 
//        num /= 10;                      
//    }
//
//    if (original == sum) {
//        printf("%d is a palindrome.\n", original);
//    } else {
//        printf("%d is not a palindrome.\n", original);
//    }

	return 0;
}
