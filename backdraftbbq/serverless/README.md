# Prequisites
* Node.js
* Serverless
    ```bash
    $ npm i -g serverless
    ```
* [AWS CLI](https://aws.amazon.com/cli/)

# Generation
Run `npx sls swagger` to regenerate lambda functions when API spec changes.

# Setup & deploy
1. Install the tooling.
    ```bash
    $ npm install
    $ cd node_modules/mysql2/
    $ npm install --production
    $ cd ../../
    ```
1. Fill in MySQL database password parameter for production in `config/config.js`. You should only need to replace the `PASSWORD_HERE` placeholder with a quoted secure password string. For example:
    ```ini
    "production": {
        "username": process.env.DB_USERNAME,
        "password": "AnExamplePassword",
        "database": process.env.DB_NAME,
        "host": process.env.DB_HOST,
        "dialect": "mysql",
        "logging": false
    },
    ```
1. Create or edit the [AWS credentials file](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html) located in `~/.aws/credentials`, or PowerShell `${home}/.aws/credentials`.
    ```ini
    [default]
    aws_access_key_id=EXAMPLE
    aws_secret_access_key=EXAMPLEKEY
    ```
1. Deploy the service. This will take about half an hour.
    ```bash
    $ serverless deploy
    ```
1. Create database user `lambda` with the password you defined above. You'll have to manually access the database directly to accomplish this. The default root password is `` - you'll be changign that as the last step.
1. Modify the `config/config.js` file again and replace the `LIVE_DB_HOST` value in the `development` section with the output from the following command:
    ```bash
    $ aws rds describe-db-instances --query "DBInstances[0].Endpoint.Address"
    ```
1. Run the database migrations.
    ```bash
    $ npx sequelize db:migrate
    ```
1. Optionally seed the database with test data.
    ```bash
    $ npx sequelize db:seed:all
    ```
1. Use the [AWS Management Console](https://aws.amazon.com/premiumsupport/knowledge-center/reset-master-user-password-rds) to reset the db master password, or do it via the CLI as follows.
    1. First get the instance ID.
        ```bash
        $ aws rds describe-db-instances --query "DBInstances[0].DBInstanceIdentifier"
        ```
    1. Then run the following, replacing `IDENTIFIER` with the value returned by the above command.
        ```bash
        $ aws rds modify-db-instance --db-instance-identifier IDENTIFIER --master-user-password NEW_PASSWORD
        ```

## Update specific endpoint
```bash
$ serverless deploy -f functionName -v
```

## Recommended further actions
* Set up the eastern region as default in your AWS config: `~/.aws/config`
    ```ini
    [default]
    region = us-east-1
    ```
* Use [Visual Studio Code](https://code.visualstudio.com) to edit, debug, and deploy. Be sure to check out the configured Tasks.
* Load the Postman collection, located in the `docs` folder, to exercise the API.