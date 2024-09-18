#include<stdio.h>

struct emp
{
	int id;
	char name[10];
	char item[20];
	long int price;
};

int main()
{   
     printf("\n");
    printf("\t\t\t\t\t\t\t");
    printf("Hotel Billing System");
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("Created By:Afrozkhan\n");
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("Additional Guidence: Deepak Sir");
	printf("\n\n");
    printf("\t\t\t\t\t\t\t");
    printf("Software Use: C Language");
    
   int password;
  char choose;
 
   entry:
   printf("\n");
   printf("\t\t\t\t\t\t\t");
   printf("Welcome your home screen:\n");
   printf("\n");
   printf("\t\t\t\t\t\t\t");
   printf("please you continue.(y/n) ");
   scanf("%c", &choose);
   if(choose == 'y' || choose == 'n'){
   	if(choose == 'n'){
   		printf("\n");
        printf("\t\t\t\t\t\t\t");
   		printf("Exiting...\n");
   		return 0;
	   }
      } else
      
	  {
      	printf("\n");
        printf("\t\t\t\t\t\t\t");
	   	printf("invalid input.\n");
	   	 goto entry;
	   }
	   
	printf("\n");
    printf("\t\t\t\t\t\t\t"); 
	printf("Enter your password: ");
	scanf("%d", &password);
	if(password == 1234)
	{   
	    printf("\n");
        printf("\t\t\t\t\t\t\t");
		printf("password is a valid.\n",password);
	}
	
		else{
		printf("\n");
        printf("\t\t\t\t\t\t\t");
		printf("password is a invalid.\n");
	}
	
    int i;
//   printf("\n");
//   printf("\t\t\t\t\t\t\t");
//   printf("PLEASE WAIT FOR LOGIN: ");
//   for(i=1;i<=2;i++){
//   	sleep(1);
//   printf("*");
//   }
//   printf("\n");
//   printf("\t\t\t\t\t\t\t");
//   printf("Login Successfully");
   
   struct emp ob[1];
    printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("enter the data:\n");
	for(i=0;i<1;i++){
    printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("enter id:");
	scanf("%d", &ob[i].id);
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("enter name:");
	scanf("%s", ob[i].name);
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("enter Item:");
	scanf("%s", &ob[i].item);
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("enter Price:");
	scanf("%d", &ob[i].price);
	}
	printf("\n");
    printf("\t\t\t\t\t\t\t");
    printf("PLEASE WAIT FOR Bill: ");
    for(i=0;i<=3;i++){
    	sleep(1);
     printf("*");
   }
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("ID\tNAME\tItem\tPrice\n");
	int gst;
	int avg;
	int sum;
	int net;
	for(i=0;i<1;i++){
	gst = ob[i].price*12/100;
	avg = (ob[i].price+gst)/2;
	sum = ob[i].price + gst;
	net = ob[i].price - gst;
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("%d\t%s\t%s\t%ld\n",ob[i].id,ob[i].name
	,ob[i].item,ob[i].price);
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("Total GST = %d\n", gst);
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("Total avg = %d\n", avg);
	printf("\n");
    printf("\t\t\t\t\t\t\t"); 
	printf("Net Bill = %d\n", net);
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("Total sum = %d\n", sum);
		}
   printf("\n");
   printf("\t\t\t\t\t\t\t");
   printf("Thank you for visiting our software:");
	for(i=1;i<=1;i++){
   	 sleep(1);
   printf("\n");
   printf("\t\t\t\t\t\t\t");
   printf("welcome our home:");
   }
	goto entry;
	 
	return 0;
}
