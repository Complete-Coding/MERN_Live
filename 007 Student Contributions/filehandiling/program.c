#include <stdio.h>

int main() {
//    int password;
//    char n;
//
//    entry:
//    printf("Enter the password: ");
//    scanf("%d", &password);
//
//    if (password == 1234) {
//        printf("Password valid\n");
//    } else {
//        printf("Password invalid\n\n");
//        printf("Do you want to try again? (y/n): ");
//
//        while ((n = getchar()) != '\n' && n != EOF);
//
//        scanf("%c", &n);
//
//        if (n == 'y' || n == 'Y') {
//            goto entry;
//        }
//	}

// loop

//int i;
//int sum = 0;
//for(i=1;i<=5;i++){
//	sum = i*i;
//	printf("%d\t",sum);
//
//}

//int i;
//int sum = 0;
//for(i=1;i<=5;i++){
//	sum = sum+i*i*i;
//}
//printf("%d\n",sum);

//int a,b,c;
//
//printf("Enter the value a:");
//scanf("%d", &a);
//
//printf("Enter the value b:");
//scanf("%d", &b);
//
//printf("Enter the value c:");
//scanf("%d", &c);
//
//if(a<b){
//	if(b<c){
//		printf("c is a largest number");
//	}else{
//		printf("b is a largest number");
//	}
//}else{
//	printf("a is a largest number");
//}

//int i;
//int num;
//int sum=0;
//int rem=0;
//
//printf("Enter the value num:");
//scanf("%d",&num);
//
//for(i=1;i<=num;i++){
//	rem = num%10;
//	sum = sum+rem;
//	num = num/10;
//}
//printf("sum of digit: %d",sum);

//int i;
//int n;
//int fact;
//printf("Enter the number:");
//scanf("%d",&n);
//for(i=1;i<=n;i++){
//	fact = fact*i;
//}
//printf("%d",fact);

//int num = 407;
//int total = 0;
//int rem;
//int xn=num;
//while(xn!=0){
//	rem = xn%10;
//	total = total+rem*rem*rem;
//	xn = xn/10;
//}
//if(num == total){
//	printf("yes it is a armstrong");
//}
//else{
//	printf("no it is a armstrong");
//}

//int i,j;
//for(i=1;i<=5;i++){
//	for(j=1;j<=5;j++){
//		printf("1");
//	}
//	printf("%d\n");
//}

//int i,j;
//for(i=1;i<=5;i++){
//	for(j=1;j<=i;j++){
//		printf("*");
//	}
//	printf("%d\n",i);
//}

//int i,j;
//for(i=1;i<=5;i++){
//	for(j=5;j>=i;j--){
//		printf("*");
//	}
//	printf("%d\n",i);
//}

//int total;
//int rem;
//int num = 407;
//int xn = num;
//while(xn!=0){
//	rem = xn%10;
//	total = total+rem*rem*rem;
//	xn = xn/10;
//}
//if(num == total){
//	printf("yes it is a armstrong");
//}else{
//	printf("no it is a armstrong");
//}

//char alpha = range('A','Z');
//int i,j;
//for(i=1;i<=alpha;i++){
//	for(j=1;j<=alpha;j++){
//		printf("A");
//	}
//	printf("%c",i);
//}

//int num = 14597;
//int sum;
//int rem;
//int i;
//for(i=1;i<=num;i++){
//	rem = num%10;
//	sum = sum+rem;
//	num = num/10;
//}
//printf("sum of digit :%d",sum);

//int total;
//int num = 407;
//int rem;
//int xn = num;
//while(xn!=0){
//	rem = xn%10;
//	total = total+rem*rem*rem;
//	xn = xn/10;
//}
//if(num == total){
//	printf("armstrong");
//}
//else{
//	printf("not a armstrong");
// }

 
 
 int sum;
int rem;
int num = 407;
int xn = num;
while(xn!=0){
	xn = xn%10;
	sum = sum+10*rem;
	xn = xn/10;
}
if(xn == num){
	printf("palindrom");
}
else{
	printf("palindrom");
}

//int print[] = {12,34,67,8,9};
//	printf("%d",sizeof(print));

//int matrix[2][3] = {{2,3,6},{4,6,8}};
//int i,j;
//for(i=0;i<2;i++){
//	for(j=0;j<3;j++){
//		printf("%d\t",matrix[i][j]);
//	}
//	printf("\n");
//}
//
//char str[11] = "apnacollage";
//char str1[11];
//printf("%s",str);
//int i;
//for(i=0;i<=10;i++){
//	printf("%c\n",str[i]);
//}

//printf("%d",strlen(str));
//strcpy(str,str1);
//printf("%s",str1);

//
//int i,j;
//for(i=1;i<=10;i++){
//	
//	for(j=1;j<=10;j++)
//	{
//		if(i==1||i==10||j==1||j==10)
//		{
//			printf("*");
//		}
//		else{
//			printf(" ");
//		}
//	}
//	printf("\n");
//}
//
//for(i=1;i<=10;i++){
//	
//	for(j=1;j<=10;j++)
//	{
//		if(i==10||j==10)
//		{
//			printf("*");
//		}
//		else{
//			printf(" ");
//		}
//	}
//	printf("\n");
//}

//for(i=1;i<=10;i++){
//	for(j=1;j<10;j++){
//		if(i==1||j==1){
//			printf("*");
//		}
//		else{
//			printf(" ");
//		}
//	}
//	printf("\n");
//}

// assignment work * print S and H

//int mynum[] = {234,56,78,90,23,56};
// mynum[1] = 34;
//int i;
//for(i=0;i < 6; i++){
//   	printf("%d\n",mynum[i]);
//}

//printf("%lu",sizeof(mynum));

//int avg,sum = 0;
//int i;
//int lenght = sizeof(mynum);
//for(i=0;i<lenght;i++){
//	sum = sum+mynum[i];
//	printf("%d",sum);
//}

    return 0;
}
