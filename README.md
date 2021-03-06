# Todoist-Widget
Script to modify Cinnamon Note desklet to display Todoist tasks and update it regularly.

![image](https://user-images.githubusercontent.com/56017960/139199607-8aaf14f4-7361-4436-b59f-5135490551cf.png)


### External services used-
* [Todoist](https://developer.todoist.com/rest/v1) REST API
* [Note](https://cinnamon-spices.linuxmint.com/desklets/view/38) Cinnamon Desklet
<hr>

### 📄 Prerequisites:
1. [Note](https://cinnamon-spices.linuxmint.com/desklets/view/38) Cinnamon Desklet
2. [Node.js](https://nodejs.org/en/)
3. [Corntab](https://opensource.com/article/17/11/how-use-cron-linux)
4. An extrenal Text Editor. My pick is [Gedit](https://wiki.gnome.org/Apps/Gedit).
<hr>

### 🔧 Setup:

#### 1. Repository
* Clone the repo
   ```sh
   git clone https://github.com/savi-1311/Todoist-Widget
   ```
* Create a .env file using the template .example.env and add value of Todoist API token. Can be found [here](https://todoist.com/app/settings/integrations).
* Make all .sh files executable
  ```
  chmod +x filename.sh
  ```

#### 2. Setting up with Note Desklet
* Open Note Desklet Configuration.
* Browse and select ```desktopList.txt``` in path to notes text file.
* Add the following command in Command for editing this note ```gedit %f```
* You can replace 'gedit' with edit command of any text editor you use.

#### 3. Setting up CRON jobs
* Open the editing mode of crontab
```
crontab -e
```
* Add the following command. This will update the list every 30 mins.
```
SHELL=/bin/bash
*/30  * * * * cd /path/to/the/local/repo/Todoist && ./run.sh

```
<hr>
