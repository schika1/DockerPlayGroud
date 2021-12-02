FROM httpd

# define the working directory
WORKDIR /usr/local/apache2/htdocs/
# copy our html files
COPY . /usr/local/apache2/htdocs/

# change file mod
RUN chmod 755 /usr/local/apache2/htdocs/*
RUN chmod 755 /usr/local/apache2/htdocs/imgs/*
# change user



