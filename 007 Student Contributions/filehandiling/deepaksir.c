#include<stdio.h>
//struct emp
//{
//	int id;
//	char name[10];
//	int age;
//	long int sal;
//};

 int main()
{
//	char n[10];
//	int i;
//	printf("Enter your value:");
//	scanf("%s",n);
//	for(i=0;n[i]!='\0';i++)
//	{
//		if(n[i]>='0'&&n[i]<='9')
//		{
//			printf("*");
//		}
//	}
//	printf("\n your actual value:%s",n);

//int i;
//printf("\n\n\n\n\n\n\n\n");
//printf("\t\t\t\t\t\t\t\t");
//printf("PLEASE WAIT FOR LOGIN:");
//for(i=1;i<=5;i++)
//{
//	sleep(1);
//	printf("->>");
//}
//printf("\n\n\n\n\n\n\n\n");
//printf("\t\t\t\t\t\t\t\t");
//sleep(5);
//system("cls");
//printf("\n\n\n\n\n\n\n\n");
//printf("\t\t\t\t\t\t\t\t");
//printf("press 1 for web d tutorial.\n");
//printf("\t\t\t\t\t\t\t\t");
//printf("press 2 for c language tutorial.\n");
//printf("\t\t\t\t\t\t\t\t");
//printf("press 3 for c++ language tutorial.\n");
//printf("\t\t\t\t\t\t\t\t");
//printf("press 4 for python language tutorial.\n");
//printf("\t\t\t\t\t\t\t\t");
//printf("Enter your choice now");

//int n,rev=0,rem;
//printf("Enter the any three:");
//scanf("%d",&n);
//while(n!=0)
//{
//	rem=n%10;
//	rev=rev*10+rem;
//	n=n/10;
//}
//printf("rev=%d",rev);

//int i,flag=0,c=0;
//char str[100],ch;
//printf("enter the string:");
//gets(str);
//printf("searching the number of element");
//scanf("%c",&ch);
//for(i=0;str[i]!='\0';i++)
//{
//	if(str[i]==ch)
//	{
//		flag = 0;
//		c++;
//	}
//}
//printf("repition of character:=%d",c);


//int i;
//char ch1, password[10];
//printf("Enter your password:");
//for(i=0;i<10;i++)
//{
//	ch1=getch();
//	password[i]=ch1;
//	
//	if(ch1!=13)
//	  printf("*");
//	  if(ch1 == 13)
//	    break;
//}
//password[i]='\0';
//printf("\n%s",password);

//struct emp ob[3];
//int i;
//printf("enter the data:\n");
//for(i=0;i<3;i++)
//{
//	printf("enter id:");
//	scanf("%d",&ob[i].id);
//	printf("enter name:");
//	scanf("%s",ob[i].name);
//	printf("enter age");
//	scanf("%d",&ob[i].age);
//	printf("enter salary:");
//	scanf("%d",&ob[i].sal);
//}
//printf("ID\tNAME\tAGE\tSALARY\n");
//for(i=0;i<3;i++)
//{
//	printf("%d\t%s\t%d\t%ld\n",ob[i].id,ob[i].name,ob[i].age,ob[i].sal);
//}

//myfunc(100);
//int x=10, *p1;
//float y=10, *p2;
//char ch='h',*p3;
//p1=&x;
//p2=&y;
//p3=&ch;
//printf("value=%d address=%u\n",*p1,p1);
//printf("value=%f address=%u\n",*p2,p2);
//printf("value=%c address=%u\n",*p3,p3);

//int x = 100,*p1, **p2, ***p3;
//int *exp;
//p1=&x;
//p2=&p1;
//p3=&p2;
//exp=*p1 + **p2 / ***p3;
//printf("value%d\n",*p1);
//printf("value=%d\n",**p2);
//printf("value=%d\n",***p3);
//printf("sum of pointer value=%d",exp);

//int arr[5], *pr[5],i;
//printf("enter the array element:");
//for(i=0;i<5;i++)
//{
//	scanf("%d",&arr[i]);
//	pr[i]=&arr[i];
//}
//printf("display all element by pointer array;\n");
//for(i=0;i<5;i++)
//{
//	printf("%d\n",arr[i]);
//}

//char name[10],i;
//int len=0;
//int al=0;
//int d=0;
//int sp=0;
//printf("enter the string:");
//gets(name);
//for(i=0;name[i]!='\0';i++)
//{
//	len++;
//	if(name[i]>='a'&&name[i]<='z')
//	{
//		al++;
//	}
//	if(name[i]>='0'&&name[i]<='9')
//	{
//		d++;
//	}
//	if(name[i]==name[i])
//	{
//		sp++;
//	}
//	printf("%c",name[i]);
//}
//printf("\nlenght of string:=%d",len);
//printf("\n total alphabets of string:=%d",al);
//printf("\n total digits of string:=%d",d);
//printf("\n total no:=%d",sp);

//int i;
//int len = 0;
//char temp = 0;
//char str[10];
//printf("Enter the string:");
//gets(str);
//len = strlen(str);
//for(i=0;i<len;i++)
//{
//	temp = str[1];
//	str[1] = str[2];
//	str[2] = temp;
//}
//printf("after swapping");
//  printf("%s",str);
  
int i;
char str[10],n;
int len = 0;
int m = 0;
printf("Enter the value: ");
gets(str);
printf("searching the array of number: ");
scanf("%c",&n);
for(i=0;i<str[i]!='\0';i++)
{
	if(str[i]=='a' || str[i]=='i' || str[i]=='e' || str[i]=='o' || str[i]=='u')
	{
	    len++;	
	}
  else if(str[i]==n)
  {
  	m++;
  }
  }
  printf("name print=%s \n",str);
  printf("total string lenght are:=%d\n",len);
  printf("total vowels into string are:=%c",m);
  
	return 0;
}
