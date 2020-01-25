# Generated by Django 3.0.2 on 2020-01-25 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('yardsApp', '0006_auto_20200125_1823'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userplant',
            name='family',
            field=models.CharField(blank=True, default='', max_length=250),
        ),
        migrations.AlterField(
            model_name='userplant',
            name='isInvasive',
            field=models.CharField(blank=True, default='', max_length=20),
        ),
        migrations.AlterField(
            model_name='userplant',
            name='nationalCommonName',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='userplant',
            name='nativeState',
            field=models.CharField(default='', max_length=100),
        ),
        migrations.AlterField(
            model_name='userplant',
            name='scientificNameAuthor',
            field=models.CharField(blank=True, default='', max_length=500),
        ),
        migrations.AlterField(
            model_name='userplant',
            name='symbol',
            field=models.CharField(blank=True, default='', max_length=15),
        ),
        migrations.AlterField(
            model_name='userplant',
            name='synonymSymbol',
            field=models.CharField(blank=True, default='', max_length=15),
        ),
    ]
