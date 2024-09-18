#include<stdio.h>
struct emp
{
	int id;
	char name[10];
	int sal;
//	int age;
//	long int sal;
};
int main()
{
//	struct emp ob[5];
//	int i;
//	printf("enter the data:\n");
//	for(i=0;i<5;i++){
//	printf("enter id:");
//	scanf("%d", &ob[i].id);
//	printf("enter name:");
//	scanf("%s", ob[i].name);
//	printf("enter age:");
//	scanf("%d", &ob[i].age);
//	printf("enter salary:");
//	scanf("%ld", &ob[i].sal);
//	}
//	printf("ID\tNAME\tAGE\tSALARY\n");
//	for(i=0;i<5;i++){
//		printf("%d\t%s\t%d\t%ld\n",ob[i].id,ob[i].name,ob[i].age,ob[i].sal);
//		if(ob[i].id == 101){
//			printf("%d\t%s\t%d\n",ob[i].name,ob[i].age,ob[i].sal);
//		}else{
//			printf("not index");
//		}
//	}
	
	printf("Enter the data:\n");
	printf("Enter id:");
	scanf("%d", &p->id);
	printf("Enter name:");
	scanf("%s", &p->name);
	printf("Enter salary:");
	scanf("%d", &p->sal);
	printf("ID\tNAME\tSALARY\n");
	printf("%d\t%s\t%d\n",p->id,p->name,p->sal);
	    
	    
	return 0;
}
