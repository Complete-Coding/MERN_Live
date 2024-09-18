#include<stdio.h>
struct emp
{
	int id;
	char name[10];
	int age;
	long int sal;
};

int main()
{
	
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
		printf("password is a valid.\n");
	}
	else{
		printf("\n");
        printf("\t\t\t\t\t\t\t");
		printf("password is a invalid.\n");
	}
		
   int i;
   printf("\n");
   printf("\t\t\t\t\t\t\t");
   printf("PLEASE WAIT FOR LOGIN: ");
   for(i=1;i<=5;i++){
   	sleep(1);
   	printf("->>");
   }
   
    struct emp ob[5];
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
	printf("enter age:");
	scanf("%d", &ob[i].age);
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("enter salary:");
	scanf("%ld", &ob[i].sal);
	}
	printf("\n");
    printf("\t\t\t\t\t\t\t");
	printf("ID\tNAME\tAGE\tSALARY\n");
	int gst;
	int avg;
	int sum;
	int net;
	for(i=0;i<1;i++){
		if(ob[i].id == 101 || ob[i].sal >= 20000){
					switch(ob[i].id){
		case 101:
		printf("\n");
        printf("\t\t\t\t\t\t\t");
	    printf("Please Enter your choice:");
	}
		 gst = ob[i].sal*12/100;
		 avg = (ob[i].sal+gst)/2;
		 sum = ob[i].sal + gst;
		 net = ob[i].sal - gst;
		 printf("\n");
         printf("\t\t\t\t\t\t\t");
		 printf("%d\t%s\t%d\t%ld\n",ob[i].id,ob[i].name,ob[i].age,ob[i].sal);
		 printf("\n");
         printf("\t\t\t\t\t\t\t");
	     printf("Total GST = %d\n", gst);
	     printf("\n");
         printf("\t\t\t\t\t\t\t");
	     printf("Total avg = %d\n", avg);
	     printf("\n");
         printf("\t\t\t\t\t\t\t");
	     printf("Total sum = %d\n", sum);
		 printf("\n");
         printf("\t\t\t\t\t\t\t"); 
	     printf("Net Bill = %d\n", net);
		}
		else{
			printf("\n");
            printf("\t\t\t\t\t\t\t");
			printf("not index");
		}
	}
	
	goto entry;
	
	return 0;
}
