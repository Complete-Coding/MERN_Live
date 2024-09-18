#include<stdio.h>
int main(){
	
//int array,i;
//
//printf("Enter the value :");
//scanf("%d",&array);
//
//int list[array];
//
//printf("Enter the value:",array);
//for(i=0;i<array;i++){
//	scanf("%d\n",&list[i]);
//}
//
// printf("Array elements are:\n");
//    for (i = 0; i < array; i++) {
//        printf("%d\n", list[i]);
//    }
	
	int i,array;
	printf("Enter your value:");
	scanf("%d",&array);
	int list[array];
	printf("Enter your value:",array);
	for(i=0;i<array;i++){
		scanf("%d\n",&list[i]);
	}
	printf("array element are:\n");
	for(i=0;i<array;i++){
		printf("%d\n",list[i]);
	}
	return 0;
}
