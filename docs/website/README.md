CodeDevils Website
==================

[![Build status](https://travis-ci.com/KevinThePepper/codedevils_website.svg?token=FhsGC7ZUMb7rskmp3jDy&branch=master)](https://travis-ci.com/KevinThePepper/codedevils_website)

About
-----

The CodeDevils website hosts a wide variety of services for all ASU
CodeDevils members. It uses the latest in web hosting/server back-end
frameworks to enable ASU CodeDevils members to stay up to date on club
events, give on platform for students to catch up, and acts as a bridge
for other projects and mobile platforms.

With the website we open up a whole range of features available to not
only the website but projects and other CodeDevils-sponsored events. If
you are a CodeDevils member and want to gain access to any of these
resources, please email one of the Webmasters at
<webmaster@codedevils.org>.

### Contributing

Contributions are welcome and encouraged amongst all CodeDevils members.
It's open source and rather easy to contribute, but we do ask you to
review the contribution understandings: - Contributions are made on your
time and will not be reimbursed by the club. - The Webmasters/Officers
reserve the right to reject any merge requests or updates to the
project. - All work should be done on individual task branches. No work
should be done directly on `cd-dev`, `cd-qa` or `cd-prod` unless
otherwise instructed. Branches can be made by anyone and must be merged
to the `cd-dev` branch. - Note that in an open collaborative
environment, you create and modify a branch at your own risk, meaning
another student could be making changes on similar modules. To avoid
this, please consult a Webmaster before creating a branch and making
changes.

Specs
-----

**Language:** Python 3.7.3

**Back-end Framework:** Django 2.2.2

**Additional Project Requirements:** All project requirements can be
stored either on the host machine or in a virtual environment. All
requirements can be found in the `requirements.txt` file, and can be
installed using `pip`:

```bash
pip3 install -r requirements.txt
```

Or using `pipenv` while sourcing the virtual environment. A virtual
environment is recommended since project requirements may change, and
hosting the requirements within a virtual environment allows you to make
changes to the project environment without affecting the host machine.

Getting Started
---------------

For simplicity, the tutorial and environment set-up is all done in
Linux/Mac. If you are on a Windows computer, it is recommended that you
run a Linux virtual machine (Ubuntu/Debian will suffice), and place the
repository in a shared folder between the host and virtual machines.

### Install Python 3.7

On your local machine, you will need to have Python 3.7 installed. To
install it, please follow the instructions on [this
link](https://realpython.com/installing-python/).

#### Option 1 - Run the Installation Script

The installation script works on most Linux/Mac operating systems and is
a quick way to install the project. Navigate to the root of the project
(to the `codedevils_website` folder). This should be the same folder
that contains the `requirements.txt` file. Run the command:

```bash
source bin/install.sh -v
```

The installation runs the following steps (in order):

1.  Checks that the current folder is the `codedevils_website` folder,
    the same folder that the `manage.py` module is in.
2.  Installs pip if it's not already installed.
3.  Installs and activates the virtual environment.
4.  Installs the log directory for log files (this step may go away).
5.  Installs project dependencies specified by the `requirements.txt`
    file, and saves them to the virtual environment.
6.  Modifies checks on virtual environment to bypass certain error
    messages (see [known mysql
    issue](#known-bug---mysql-version-1313-error) below).
7.  Makes migrations, checking the project models and creating the
    migrations modules required to push changes to the database.
8.  Applies the migrations, which creates the tables in the linked
    database their respective columns. *And that's it!* We have see the
    installation error out. Not all operating systems are supported and
    there are certain complex dependencies we cannot account for. If the
    installation errors at any point, run the manual installation below.

#### Option 2 - Manual Installation

Install pip *pip* is a great tool for install Python packages and is
used *everywhere* to install Django apps/plugins. The pip extension
comes standard with Python. To check that you have it installed, you can
run the command:

```bash
pip3 --version
```

You should see something like this come up:

```bash
> pip 19.1.1 from /user/local/lib/python3.7/site-packages/pip (python 3.7)
```

If you do not see a message like this, please follow [this
link](https://pip.pypa.io/en/stable/installing/) to install on any OS.
You should download `pip3` as it is the appropriate PyPi installer for
Python3.

##### Download Django

Django is the "batteries included" web framework for Python, and must be
installed on the local machine in order for the proper environment
variables to be set. To install, run the command:

```bash
pip3 install Django==2.2.2
```

`pip` will install the latest version of Django if you do not specify
the version:

```bash
pip3 install Django
```

but it's best that you install the version compatible with this project.
Note that we will install Django in the virtual environment as well, but
this is simply for local referencing and may cause issues if not
installed globally.

##### Downloading the Project

You can download the project simply by cloning this repository. *Please*
only download the `cd-dev` branch and make your changes there. You can
download `cd-prod`, but changes are restricted and are limited to the
original authors. Navigate to where you want to save the project (i.e.
`cd ~/`) and enter the commands (in order):

```bash
git clone https://github.com/KevinThePepper/codedevils_website.git
cd codedevils_website/
```

It's best that you develop in the `cd-dev` branch. Switch to the branch
with the commands:

```bash
git fetch
git checkout cd-dev
git pull    # may not be necessary, but just in case
```

You are now ready to

##### Setting Up the Virtual Environment

You will need to following these steps to get the virtual environment
set up on your computer:

###### Install and Create the Virtual Environment (venv)

Running a virtual environment is the best practice for running Python
projects on any OS. It allows you to install project requirements
without having a complete dependency on the host OS. First, you must
install `virtualenv` for Python. You can install it on any OS by running
the command:

```bash
pip3 install virtualenv
```

Once installed, you can now run the virtual environment. Most of the
examples below will be run from the virtual environment. For the website
project, open a terminal, change the directory to the root of the
project (the same folder as `manage.py`) and run the command:

```bash
virtualenv venv
```

*or*

```bash
python3 -m venv venv
```

Once you have the virtual environment installed, you can run the
following command to start using it:

```bash
source venv/bin/activate
```

Once finished using the virtual environment, you can stop it by running
the command:

```bash
deactivate
```

*or*

```bash
source deactivate
```

You should source the virtual environment every time you use the
project. For a more in-depth tutorial on using the virtual environment,
please view [this link](https://docs.python.org/3/library/venv.html).
You now have everything installed! Running the website server is as
simple as running the command:

```bash
./manage.py runserver
```

You can find out more information about this below.

##### Known Bug - MySQL Version 1.3.13 error

The project uses the `mysqlclient` for Python to manage its connection
to the MySQL database. Combining it with another SQL dependency will
raise the error message:

```bash
...
mysqlclient 1.3.13 or newer is required; you have 0.9.3
```

If the installation script is run successfully, it takes care of this
dependency. If you get this error message, you will need to enter the
following commands:

##### Linux/Unix

```bash
sed -i "s/raise ImproperlyConfigured('mysqlclient 1.3.13 or newer is required; you have %s.' % Database.__version__)/pass/" venv/lib/python3.7/site-packages/django/db/backends/mysql/base.py
sed -i "s/query.decode(errors='replace')/query.encode(errors='replace')/" venv/lib/python3.7/site-packages/django/db/backends/mysql/operations.py
```

Mac

```bash
sed -i "" "s/raise ImproperlyConfigured('mysqlclient 1.3.13 or newer is required; you have %s.' % Database.__version__)/pass/" venv/lib/python3.7/site-packages/django/db/backends/mysql/base.py
sed -i "" "s/query.decode(errors='replace')/query.encode(errors='replace')/" venv/lib/python3.7/site-packages/django/db/backends/mysql/operations.py
```

Note that the `venv/lib/python3.7` path is dependent on the installation
procedure outlined above. If your Python environment is different from
this, the folder name will change.

### Running Tests

Running tests in Django is pretty simple. You can run the entire test
suite with the command:

```bash
./manage.py test apps
```

Django will go through each app, find the `test.py` module, and run
every test case inside that module. In order to be ran, a test method
must: 1. Be within a class that extends a `unittest` test case, which
includes (but is not limited to) `SimpleTestCase`,
`TransactionTestcCase`, or more commonly `TestCase`. 2. Have a method
name beginning with `test_`. For example:

```python
def test_get_matching_api(self):    # will be run as a test case
    ...

def get_matching_api(self):         # will not be run as a test case
    ...
```

You can run individual apps test cases by specifying the directory:

```bash
./manage.py test apps/home
```

Some test classes/methods will come with tags. A tag can be used to
include/exclude specific modules in a test run. This can come in handy
when you want to test certain modules and avoid testing a module that is
time-consming. To include/exclude tags, run with the `--tag=` or
`--exclude-tag=` flags:

```bash
./manage.py test --tag=home_api --exclude-tag=home_download
```

The above will run all test cases/methods with the `home_api` tag and
exclude all test cases/methods with the `home_download` tag.

Note that in some Django projects, you may be able to simply run
`./manage.py test`. In our case, since we store all of our apps since an
`apps` folder, we must specifically target it in our tests. Tags work
the same, however.

### Using the Database

You are able to interact with the database in a few ways:

#### Admin Site

The preferred method is using the *admin* site made available by running
the server (see below) and navigating to the */admin/* site. The admin
site is designed to make database entry simple and provides uae of
widgets and entry fields made specific for those types of columns. The
below 2 methods also work for manipulating the database, but are only
preferred if something cannot be done in the admin site.

#### MySQL Workbench

The database used by the website is MySQL and can be manipulated using
the MySQL workbench. For access to the database (such as the
host/password for remote access), please contact the below **Contact
Us** contacts.

#### PHP MyAdmin

The Dream Host server that the website is hosted on comes built in with
PHP MyAmin, a great portal for interacting easily with the database. If
you've ever used PHP web frameworks before, this is the same site you're
use to. For access to the database, please contact the below **Contact
Us** contacts.

### Running the Django Server

Django is run from the command line using the `manage.py` module. When
running the server, you should have a terminal open and the active
directory in the same directory as the `manage.py` module. After
installing all the project requirements and sourcing the virtual
environment, you can run the server via the command:

```bash
./manage.py runserver
```

This runs the server on the localhost (*127.0.0.1*) on port *8000*. You
can change the default port by specifying it:

```bash
./manage.py runserver 8080  # now runs on 127.0.0.1:8080
```

Note that if you are using the host machine and not a virtual
environment, you will need to run it using the host machine's Python
library:

```bash
python3 manage.py runserver
```

Once running, you can navigate the site as any other user would! Note
that you will have to create a superuser if you admin access to the
local site. Some of the more popular links include:

1.  The home page: `http://localhost:8000/`
2.  The admin page: `http://localhost:8000/admin/`

As an admin, these pages are where you will spend most of your time.
Note that if this is the first time installing the site, you will not
have any data. You will have to create all the records again from
scratch.

But wait! The day is saved! We have provided an SQL file that will
initialize the database called *init.sql*. If you already have run the
installation above and provided the proper credentials, this has been
done for you. If not, run it inside the database server you want to host
your database on and you should be set!

Documentation
-------------

All documentation for the CodeDevils website can be found in the `docs`
folder. These are useful if you're a first-time contributor to the
website and don't want to sift through all the code (it can get scary).
If you don't know where to start, start with the `index.html` file.

You can also see documentation on the Python Django framework by going
to the [Django Project
homepage](https://docs.djangoproject.com/en/2.2/). The framework has
great documentation and is the backbone of many practices in this
project. Please only reference *Documentation version: 2.2*, which can
be located in the bottom right corner. If you're on a page where 2.2 is
not available, it's probably safe to say that content may soon be
deprecated and you should seek an alternate solution.

Contact Us
----------

**Front-end Developer:** Abraham Cifuentes (<acifuen1@asu.edu>)

**Back-end Developer:** Kevin Shelley (<krshelle@asu.edu>)
