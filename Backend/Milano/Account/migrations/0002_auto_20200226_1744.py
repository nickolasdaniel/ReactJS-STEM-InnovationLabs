# Generated by Django 2.1.7 on 2020-02-26 17:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pacientprofileuser',
            name='cnp',
            field=models.CharField(default='0', max_length=21),
        ),
    ]
