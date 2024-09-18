#include<stdio.h>
int main()
{
//   int list[10],i,t;
//   int sum;
//   printf("Enter the value:");
//    scanf("%d", &sum);
//   printf("Enter the value:");
//   for(i=0;i<10;i++){
//   	 scanf("%d\n",&list[i]);
//   }
//   printf("display the list:\n");
//   for(i=0;i<10;i++){
//   	t = sum*list[i];
//   	printf("%d x %d = %d\n",sum,list[i],t);
//   }
//   


int list[6],i,sum = 0;
   printf("Enter the value:");
   for(i=0;i<6;i++){
   	 scanf("%d\n",&list[i]);
   }
   printf("display the list:\n");
   for(i=0;i<6;i++){
   	sum = sum + list[i];
   }
   
   printf("%d Total Marks %d\n",sum);
   
	return 0;
}
