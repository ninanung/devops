FROM centos
WORKDIR /usr/sbin/test
LABEL maintainer=seungje
RUN yum -y install epel-release
RUN yum -y install npm
RUN npm install -g express-generator
RUN express /usr/sbin/test
RUN cd /usr/sbin/test | npm install
EXPOSE 3000
CMD ["npm", "start"]