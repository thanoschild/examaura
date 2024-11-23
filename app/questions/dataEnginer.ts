export const dataEngineerQuestions = [
    {
        "topic": "Professional Data Engineer",
        "no": "1",
        "question": "Your company built a TensorFlow neutral-network model with a large number of neurons and layers. The model fits well for the training data. However, when tested against new data, it performs poorly. What method can you employ to address this?",
        "options": {
            "A": "Threading",
            "B": "Serialization",
            "C": "Dropout Methods",
            "D": "Dimensionality Reduction"
        },
        "answer": "C",
        "reason": "Dropout is a regularization technique commonly used in neural networks to prevent overfitting. It helps improve the generalization of the model by randomly setting a fraction of the neurons to zero during each training iteration, which prevents the network from relying too heavily on specific neurons. This, in turn, can lead to better performance on new, unseen data."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "2",
        "question": "You are building a model to make clothing recommendations. You know a user's fashion preference is likely to change over time, so you build a data pipeline to stream new data back to the model as it becomes available. How should you use this data to train the model?",
        "options": {
            "A": "Continuously retrain the model on just the new data.",
            "B": "Continuously retrain the model on a combination of existing data and the new data.",
            "C": "Train on the existing data while using the new data as your test set.",
            "D": "Train on the new data while using the existing data as your test set."
        },
        "answer": "B",
        "reason": "This approach allows the model to benefit from both the historical data (existing data) and the new data, ensuring that it adapts to changing preferences while retaining knowledge from the past. By combining both types of data, the model can learn to make recommendations that are up-to-date and relevant to users' evolving preferences."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "3",
        "question": "You designed a database for patient records as a pilot project to cover a few hundred patients in three clinics. Your design used a single database table to represent all patients and their visits, and you used self-joins to generate reports. The server resource utilization was at 50%. Since then, the scope of the project has expanded. The database must now store 100 times more patient records. You can no longer run the reports, because they either take too long or they encounter errors with insufficient compute resources. How should you adjust the database design?",
        "options": {
            "A": "Add capacity (memory and disk space) to the database server by the order of 200.",
            "B": "Shard the tables into smaller ones based on date ranges, and only generate reports with prespecified date ranges.",
            "C": "Normalize the master patient-record table into the patient table and the visits table, and create other necessary tables to avoid self-join.",
            "D": "Partition the table into smaller tables, with one for each clinic. Run queries against the smaller table pairs, and use unions for consolidated reports."
        },
        "answer": "C",
        "reason": "Normalization is a technique used to organize data in a relational database to reduce data redundancy and improve data integrity. Breaking the patient records into separate tables (patient and visits) and eliminating self-joins will make the database more scalable and improve query performance. It also helps maintain data integrity and makes it easier to manage large datasets efficiently."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "4",
        "question": "You create an important report for your large team in Google Data Studio 360. The report uses Google BigQuery as its data source. You notice that visualizations are not showing data that is less than 1 hour old. What should you do?",
        "options": {
            "A": "Disable caching by editing the report settings.",
            "B": "Disable caching in BigQuery by editing table details.",
            "C": "Refresh your browser tab showing the visualizations.",
            "D": "Clear your browser history for the past hour then reload the tab showing the virtualizations."
        },
        "answer": "A",
        "reason": "By default, Google Data Studio 360 caches data to improve performance and reduce the amount of queries made to the data source. However, this can cause visualizations to not show data that is less than 1 hour old, as the cached data is not up-to-date."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "5",
        "question": "An external customer provides you with a daily dump of data from their database. The data flows into Google Cloud Storage GCS as comma-separated values (CSV) files. You want to analyze this data in Google BigQuery, but the data could have rows that are formatted incorrectly or corrupted. How should you build this pipeline?",
        "options": {
            "A": "Use federated data sources, and check data in the SQL query.",
            "B": "Enable BigQuery monitoring in Google Stackdriver and create an alert.",
            "C": "Import the data into BigQuery using the gcloud CLI and set max_bad_records to 0.",
            "D": "Run a Google Cloud Dataflow batch pipeline to import the data into BigQuery, and push errors to another dead-letter table for analysis."
        },
        "answer": "D",
        "reason": "Google Cloud Dataflow allows you to create a data pipeline that can preprocess and transform data before loading it into BigQuery. This approach will enable you to handle problematic rows, push them to a dead-letter table for later analysis, and load the valid data into BigQuery."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "6",
        "question": "Your weather app queries a database every 15 minutes to get the current temperature. The frontend is powered by Google App Engine and server millions of users. How should you design the frontend to respond to a database failure?",
        "options": {
            "A": "Issue a command to restart the database servers.",
            "B": "Retry the query with exponential backoff, up to a cap of 15 minutes.",
            "C": "Retry the query every second until it comes back online to minimize staleness of data.",
            "D": "Reduce the query frequency to once every hour until the database comes back online."
        },
        "answer": "B",
        "reason": "Exponential backoff is a commonly used technique to handle temporary failures, such as a database server becoming temporarily unavailable. This approach retries the query, initially with a short delay and then with increasingly longer intervals between retries. Setting a cap of 15 minutes ensures that you don't excessively burden your system with constant retries."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "7",
        "question": "You are creating a model to predict housing prices. Due to budget constraints, you must run it on a single resource-constrained virtual machine. Which learning algorithm should you use?",
        "options": {
            "A": "Linear regression",
            "B": "Logistic classification",
            "C": "Recurrent neural network",
            "D": "Feedforward neural network"
        },
        "answer": "A",
        "reason": "Linear regression is a simple and resource-efficient algorithm for predicting continuous values like housing prices. It's computationally lightweight and well-suited for single machines with limited resources. It doesn't require the extensive computational power or specialized hardware that more complex algorithms like neural networks (options C and D) might need."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "8",
        "question": "You are building new real-time data warehouse for your company and will use Google BigQuery streaming inserts. There is no guarantee that data will only be sent in once but you do have a unique ID for each row of data and an event timestamp. You want to ensure that duplicates are not included while interactively querying data. Which query type should you use?",
        "options": {
            "A": "Include ORDER BY DESK on timestamp column and LIMIT to 1.",
            "B": "Use GROUP BY on the unique ID column and timestamp column and SUM on the values.",
            "C": "Use the LAG window function with PARTITION by unique ID along with WHERE LAG IS NOT NULL.",
            "D": "Use the ROW_NUMBER window function with PARTITION by unique ID along with WHERE row equals 1."
        },
        "answer": "D",
        "reason": "This approach will assign a row number to each row within a unique ID partition, and by selecting only rows with a row number of 1, you will ensure that duplicates are excluded in your query results. It allows you to filter out redundant rows while retaining the latest or earliest records based on your timestamp column."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "9",
        "question": "Your company is using WILDCARD tables to query data across multiple tables with similar names. The SQL statement is currently failing with the following error:\nWhich table name will make the SQL statement work correctly?",
        "options": {
            "A": "'bigquery-public-data.noaa_gsod.gsod'",
            "B": "bigquery-public-data.noaa_gsod.gsod*",
            "C": "'bigquery-public-data.noaa_gsod.gsod'*",
            "D": "'bigquery-public-data.noaa_gsod.gsod*`"
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "10",
        "question": "Your company is in a highly regulated industry. One of your requirements is to ensure individual users have access only to the minimum amount of information required to do their jobs. You want to enforce this requirement with Google BigQuery. Which three approaches can you take? (Choose three.)",
        "options": {
            "A": "Disable writes to certain tables.",
            "B": "Restrict access to tables by role.",
            "C": "Ensure that the data is encrypted at all times.",
            "D": "Restrict BigQuery API access to approved users.",
            "E": "Segregate data across multiple tables or databases.",
            "F": "Use Google Stackdriver Audit Logging to determine policy violations."
        },
        "answer": "BDE",
        "reason": "Restrict access to tables by role: You can use BigQuery's access controls to restrict access to specific tables based on user roles. This allows you to ensure that users can only access the data they need to do their job.\nRestrict BigQuery API access to approved users: By using Cloud Identity and Access Management (IAM) you can control who has access to the BigQuery API, and what actions they are allowed to perform. This will help to ensure that only authorized users can access the data.\nSegregate data across multiple tables or databases: You can use multiple tables or databases to separate different types of data, so that users can only access the data they need. This will prevent users from seeing data they shouldn't have access to."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "11",
        "question": "You are designing a basket abandonment system for an ecommerce company. The system will send a message to a user based on these rules:\n\u2711 No interaction by the user on the site for 1 hour\nHas added more than $30 worth of products to the basket\n\u2711 Has not completed a transaction\nYou use Google Cloud Dataflow to process the data and decide if a message should be sent. How should you design the pipeline?",
        "options": {
            "A": "Use a fixed-time window with a duration of 60 minutes.",
            "B": "Use a sliding time window with a duration of 60 minutes.",
            "C": "Use a session window with a gap time duration of 60 minutes.",
            "D": "Use a global window with a time based trigger with a delay of 60 minutes."
        },
        "answer": "C",
        "reason": "A session window with a gap time duration of 60 minutes is appropriate for capturing user sessions where there has been no interaction on the site for 1 hour. It allows you to group user activity within a session, and when the session becomes inactive for the defined gap time, you can evaluate whether the user added more than $30 worth of products to the basket and has not completed a transaction."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "12",
        "question": "Your company handles data processing for a number of different clients. Each client prefers to use their own suite of analytics tools, with some allowing direct query access via Google BigQuery. You need to secure the data so that clients cannot see each other's data. You want to ensure appropriate access to the data. Which three steps should you take? (Choose three.)",
        "options": {
            "A": "Load data into different partitions.",
            "B": "Load data into a different dataset for each client.",
            "C": "Put each client's BigQuery dataset into a different table.",
            "D": "Restrict a client's dataset to approved users.",
            "E": "Only allow a service account to access the datasets.",
            "F": "Use the appropriate identity and access management (IAM) roles for each client's users."
        },
        "answer": "BDF",
        "reason": "By loading each client's data into a separate dataset, you ensure that each client's data is isolated from the data of other clients. Restricting access to each client's dataset to only approved users, as specified in D, further enhances data security by ensuring that only authorized users can access the data. By using appropriate IAM roles for each client's users, as specified in F, you can grant different levels of access to different clients and their users, ensuring that each client has only the level of access required for their specific needs."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "13",
        "question": "You want to process payment transactions in a point-of-sale application that will run on Google Cloud Platform. Your user base could grow exponentially, but you do not want to manage infrastructure scaling. Which Google database service should you use?",
        "options": {
            "A": "Cloud SQL",
            "B": "BigQuery",
            "C": "Cloud Bigtable",
            "D": "Cloud Datastore"
        },
        "answer": "D",
        "reason": "Cloud Datastore (now part of Google Cloud Firestore in Datastore mode) is designed for high scalability and ease of management for applications. It is a NoSQL document database built for automatic scaling, high performance, and ease of application development. It's serverless, meaning it handles the scaling, performance, and management automatically, fitting your requirement of not wanting to manage infrastructure scaling."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "14",
        "question": "You want to use a database of information about tissue samples to classify future tissue samples as either normal or mutated. You are evaluating an unsupervised anomaly detection method for classifying the tissue samples. Which two characteristic support this method? (Choose two.)",
        "options": {
            "A": "There are very few occurrences of mutations relative to normal samples.",
            "B": "There are roughly equal occurrences of both normal and mutated samples in the database.",
            "C": "You expect future mutations to have different features from the mutated samples in the database.",
            "D": "You expect future mutations to have similar features to the mutated samples in the database.",
            "E": "You already have labels for which samples are mutated and which are normal in the database."
        },
        "answer": "AD",
        "reason": "A, anomaly should have a little amount, if there are many samples then we should do classification instead, because unsupervised will give a lot of false positive.\nD, the future anomaly should be of the same distribution as present anomaly! or else our anomaly detection will not be generalize to the future feature."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "15",
        "question": "You need to store and analyze social media postings in Google BigQuery at a rate of 10,000 messages per minute in near real-time. Initially, design the application to use streaming inserts for individual postings. Your application also performs data aggregations right after the streaming inserts. You discover that the queries after streaming inserts do not exhibit strong consistency, and reports from the queries might miss in-flight data. How can you adjust your application design?",
        "options": {
            "A": "Re-write the application to load accumulated data every 2 minutes.",
            "B": "Convert the streaming insert code to batch load for individual messages.",
            "C": "Load the original message to Google Cloud SQL, and export the table every hour to BigQuery via streaming inserts.",
            "D": "Estimate the average latency for data availability after streaming inserts, and always run queries after waiting twice as long."
        },
        "answer": "D",
        "reason": "The problem requirement is doing analytics on real-time data. You cannot do batch processing because the business requires it to be real-time even if it makes your job simpler, so B is incorrect. Other options are not streaming."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "16",
        "question": "Your startup has never implemented a formal security policy. Currently, everyone in the company has access to the datasets stored in Google BigQuery. Teams have freedom to use the service as they see fit, and they have not documented their use cases. You have been asked to secure the data warehouse. You need to discover what everyone is doing. What should you do first?",
        "options": {
            "A": "Use Google Stackdriver Audit Logs to review data access.",
            "B": "Get the identity and access management IIAM) policy of each table",
            "C": "Use Stackdriver Monitoring to see the usage of BigQuery query slots.",
            "D": "Use the Google Cloud Billing API to see what account the warehouse is being billed to."
        },
        "answer": "A",
        "reason": "Table access control is now possible in big query. However, before even checking table access control permission which is not set by the company as a formal security policy yet, we need to first understand by looking at the big query immutable audit logs as who is accessing what datasets and tables. Based on the information, access control policy at dataset and table level can be set."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "17",
        "question": "Your company is migrating their 30-node Apache Hadoop cluster to the cloud. They want to re-use Hadoop jobs they have already created and minimize the management of the cluster as much as possible. They also want to be able to persist data beyond the life of the cluster. What should you do?",
        "options": {
            "A": "Create a Google Cloud Dataflow job to process the data.",
            "B": "Create a Google Cloud Dataproc cluster that uses persistent disks for HDFS.",
            "C": "Create a Hadoop cluster on Google Compute Engine that uses persistent disks.",
            "D": "Create a Cloud Dataproc cluster that uses the Google Cloud Storage connector.",
            "E": "Create a Hadoop cluster on Google Compute Engine that uses Local SSD disks."
        },
        "answer": "D",
        "reason": "Google Cloud Dataproc is a managed Hadoop and Spark service that allows you to easily create and manage Hadoop clusters in the cloud. By using the Google Cloud Storage connector, you can persist data in Google Cloud Storage, which provides durable storage beyond the cluster's lifecycle. This approach ensures data is retained even if the cluster is terminated, and it allows you to reuse your existing Hadoop jobs."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "18",
        "question": "Business owners at your company have given you a database of bank transactions. Each row contains the user ID, transaction type, transaction location, and transaction amount. They ask you to investigate what type of machine learning can be applied to the data. Which three machine learning applications can you use? (Choose three.)",
        "options": {
            "A": "Supervised learning to determine which transactions are most likely to be fraudulent.",
            "B": "Unsupervised learning to determine which transactions are most likely to be fraudulent.",
            "C": "Clustering to divide the transactions into N categories based on feature similarity.",
            "D": "Supervised learning to predict the location of a transaction.",
            "E": "Reinforcement learning to predict the location of a transaction.",
            "F": "Unsupervised learning to predict the location of a transaction."
        },
        "answer": "BCD",
        "reason": "Fraudulent transaction, is nothing but anomaly detection which falls under Unsupervised.\nAll transactions can be categorized using type etc - clustering algorithm.\nUsing location as a label, supervised classification can be developed to predict location."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "19",
        "question": "Your company's on-premises Apache Hadoop servers are approaching end-of-life, and IT has decided to migrate the cluster to Google Cloud Dataproc. A like-for- like migration of the cluster would require 50 TB of Google Persistent Disk per node. The CIO is concerned about the cost of using that much block storage. You want to minimize the storage cost of the migration. What should you do?",
        "options": {
            "A": "Put the data into Google Cloud Storage.",
            "B": "Use preemptible virtual machines (VMs) for the Cloud Dataproc cluster.",
            "C": "Tune the Cloud Dataproc cluster so that there is just enough disk for all data.",
            "D": "Migrate some of the cold data into Google Cloud Storage, and keep only the hot data in Persistent Disk."
        },
        "answer": "A",
        "reason": "This is the best option. Google Cloud Dataproc is designed to work well with Google Cloud Storage. Using GCS instead of Persistent Disk can save money, and GCS offers advantages such as higher durability and the ability to share data across multiple clusters."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "20",
        "question": "You work for a car manufacturer and have set up a data pipeline using Google Cloud Pub/Sub to capture anomalous sensor events. You are using a push subscription in Cloud Pub/Sub that calls a custom HTTPS endpoint that you have created to take action of these anomalous events as they occur. Your custom HTTPS endpoint keeps getting an inordinate amount of duplicate messages. What is the most likely cause of these duplicate messages?",
        "options": {
            "A": "The message body for the sensor event is too large.",
            "B": "Your custom endpoint has an out-of-date SSL certificate.",
            "C": "The Cloud Pub/Sub topic has too many messages published to it.",
            "D": "Your custom endpoint is not acknowledging messages within the acknowledgement deadline."
        },
        "answer": "D",
        "reason": "Cloud Pub/Sub guarantees at-least-once message delivery, which means that occasional duplicates are to be expected. However, a high rate of duplicates may indicate that the client is not acknowledging messages within the configured ack_deadline_seconds, and Cloud Pub/Sub is retrying the message delivery."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "21",
        "question": "Your company uses a proprietary system to send inventory data every 6 hours to a data ingestion service in the cloud. Transmitted data includes a payload of several fields and the timestamp of the transmission. If there are any concerns about a transmission, the system re-transmits the data. How should you deduplicate the data most efficiency?",
        "options": {
            "A": "Assign global unique identifiers (GUID) to each data entry.",
            "B": "Compute the hash value of each data entry, and compare it with all historical data.",
            "C": "Store each data entry as the primary key in a separate database and apply an index.",
            "D": "Maintain a database table to store the hash value and other metadata for each data entry."
        },
        "answer": "A",
        "reason": "Inventory data can often be naturally duplicate. Assigning a unique GUID at sender's end is ensuring that we can track a unique record reliably at the recieving end and if there are issues which causes same field to be sent twice, we can easily deduplicate using the GUID with lesser hassle."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "22",
        "question": "Your company has hired a new data scientist who wants to perform complicated analyses across very large datasets stored in Google Cloud Storage and in a Cassandra cluster on Google Compute Engine. The scientist primarily wants to create labelled data sets for machine learning projects, along with some visualization tasks. She reports that her laptop is not powerful enough to perform her tasks and it is slowing her down. You want to help her perform her tasks. What should you do?",
        "options": {
            "A": "Run a local version of Jupiter on the laptop.",
            "B": "Grant the user access to Google Cloud Shell.",
            "C": "Host a visualization tool on a VM on Google Compute Engine.",
            "D": "Deploy Google Cloud Datalab to a virtual machine (VM) on Google Compute Engine."
        },
        "answer": "D",
        "reason": "Google Cloud Datalab is a powerful interactive tool for data exploration, analysis, and machine learning. However Datalab is no longer used in GCP (Deprecated in Sep2022), It is Vertex AI or Deep Learning VM Images."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "23",
        "question": "You are deploying 10,000 new Internet of Things devices to collect temperature data in your warehouses globally. You need to process, store and analyze these very large datasets in real time. What should you do?",
        "options": {
            "A": "Send the data to Google Cloud Datastore and then export to BigQuery.",
            "B": "Send the data to Google Cloud Pub/Sub, stream Cloud Pub/Sub to Google Cloud Dataflow, and store the data in Google BigQuery.",
            "C": "Send the data to Cloud Storage and then spin up an Apache Hadoop cluster as needed in Google Cloud Dataproc whenever analysis is required.",
            "D": "Export logs in batch to Google Cloud Storage and then spin up a Google Cloud SQL instance, import the data from Cloud Storage, and run an analysis as needed."
        },
        "answer": "B",
        "reason": "Pubsub for realtime, Dataflow for pipeline, Bigquery for analytics.You can use cloud data flow for both batch and streaming pipelines. Pub sub will be used to stream data into cloud data flow."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "24",
        "question": "You have spent a few days loading data from comma-separated values (CSV) files into the Google BigQuery table CLICK_STREAM. The column DT stores the epoch time of click events. For convenience, you chose a simple schema where every field is treated as the STRING type. Now, you want to compute web session durations of users who visit your site, and you want to change its data type to the TIMESTAMP. You want to minimize the migration effort without making future queries computationally expensive. What should you do?",
        "options": {
            "A": "Delete the table CLICK_STREAM, and then re-create it such that the column DT is of the TIMESTAMP type. Reload the data.",
            "B": "Add a column TS of the TIMESTAMP type to the table CLICK_STREAM, and populate the numeric values from the column TS for each row. Reference the column TS instead of the column DT from now on.",
            "C": "Create a view CLICK_STREAM_V, where strings from the column DT are cast into TIMESTAMP values. Reference the view CLICK_STREAM_V instead of the table CLICK_STREAM from now on.",
            "D": "Add two columns to the table CLICK STREAM: TS of the TIMESTAMP type and IS_NEW of the BOOLEAN type. Reload all data in append mode. For each appended row, set the value of IS_NEW to true. For future queries, reference the column TS instead of the column DT, with the WHERE clause ensuring that the value of IS_NEW must be true.",
            "E": "Construct a query to return every row of the table CLICK_STREAM, while using the built-in function to cast strings from the column DT into TIMESTAMP values. Run the query into a destination table NEW_CLICK_STREAM, in which the column TS is the TIMESTAMP type. Reference the table NEW_CLICK_STREAM instead of the table CLICK_STREAM from now on. In the future, new data is loaded into the table NEW_CLICK_STREAM."
        },
        "answer": "E",
        "reason": "It avoids the need to delete and recreate the entire CLICK_STREAM table, which is time-consuming and requires reloading all data. It allows you to use a simple query to cast the existing DT column as TIMESTAMP values and store the results in a new table, NEW_CLICK_STREAM. You can gradually migrate to the new data format, and your future queries will be able to utilize the TIMESTAMP data type for more efficient processing."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "25",
        "question": "You want to use Google Stackdriver Logging to monitor Google BigQuery usage. You need an instant notification to be sent to your monitoring tool when new data is appended to a certain table using an insert job, but you do not want to receive notifications for other tables. What should you do?",
        "options": {
            "A": "Make a call to the Stackdriver API to list all logs, and apply an advanced filter.",
            "B": "In the Stackdriver logging admin interface, and enable a log sink export to BigQuery.",
            "C": "In the Stackdriver logging admin interface, enable a log sink export to Google Cloud Pub/Sub, and subscribe to the topic from your monitoring tool.",
            "D": "Using the Stackdriver API, create a project sink with advanced log filter to export to Pub/Sub, and subscribe to the topic from your monitoring tool."
        },
        "answer": "D",
        "reason": "D as the key requirement is to have notification on a particular table. It can be achieved using advanced log filter to filter only the table logs and create a project sink to Cloud Pub/Sub for notification."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "26",
        "question": "You are working on a sensitive project involving private user data. You have set up a project on Google Cloud Platform to house your work internally. An external consultant is going to assist with coding a complex transformation in a Google Cloud Dataflow pipeline for your project. How should you maintain users' privacy?",
        "options": {
            "A": "Grant the consultant the Viewer role on the project.",
            "B": "Grant the consultant the Cloud Dataflow Developer role on the project.",
            "C": "Create a service account and allow the consultant to log on with it.",
            "D": "Create an anonymized sample of the data for the consultant to work with in a different project."
        },
        "answer": "D",
        "reason": "By creating an anonymized sample of the data, you can provide the consultant with a realistic dataset that doesn't contain sensitive or private information. This way, the consultant can work on the project without direct access to sensitive data, reducing privacy risks."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "27",
        "question": "You are building a model to predict whether or not it will rain on a given day. You have thousands of input features and want to see if you can improve training speed by removing some features while having a minimum effect on model accuracy. What can you do?",
        "options": {
            "A": "Eliminate features that are highly correlated to the output labels.",
            "B": "Combine highly co-dependent features into one representative feature.",
            "C": "Instead of feeding in each feature individually, average their values in batches of 3.",
            "D": "Remove the features that have null values for more than 50% of the training records."
        },
        "answer": "B",
        "reason": "Combining highly correlated features into a single representative feature can reduce the dimensionality of your dataset, making the training process faster while preserving relevant information. This approach often helps eliminate redundancy in the input data."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "28",
        "question": "Your company is performing data preprocessing for a learning algorithm in Google Cloud Dataflow. Numerous data logs are being generated during this step, and the team wants to analyze them. Due to the dynamic nature of the campaign, the data is growing exponentially every hour. The data scientists have written the following code to read the data for a new key features in the logs.\nYou want to improve the performance of this data read. What should you do?",
        "options": {
            "A": "Specify the TableReference object in the code.",
            "B": "Use .fromQuery operation to read specific fields from the table.",
            "C": "Use of both the Google BigQuery TableSchema and TableFieldSchema classes.",
            "D": "Call a transform that returns TableRow objects, where each element in the PCollection represents a single row in the table."
        },
        "answer": "B",
        "reason": "Use .from Query operation to read specific fields from the table. Big Query IO. read. from() directly reads the whole table from Big Query. This function exports the whole table to temporary files in Google Cloud Storage, where it will later be read from. This requires almost no computation, as it only performs an export job, and later Dataflow reads from GCS (not from Big Query).\nBig Query IO .read .from Query() executes a query and then reads the results received after the query execution. Therefore, this function is more time-consuming, given that it requires that a query is first executed (which will incur in the corresponding economic and computational costs)."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "29",
        "question": "Your company is streaming real-time sensor data from their factory floor into Bigtable and they have noticed extremely poor performance. How should the row key be redesigned to improve Bigtable performance on queries that populate real-time dashboards?",
        "options": {
            "A": "Use a row key of the form <timestamp>.",
            "B": "Use a row key of the form <sensorid>.",
            "C": "Use a row key of the form <timestamp>#<sensorid>.",
            "D": "Use a row key of the form >#<sensorid>#<timestamp>."
        },
        "answer": "D",
        "reason": "Best practices of bigtable states that rowkey should not be only timestamp or have timestamp at starting. It’s better to have sensorid and timestamp"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "30",
        "question": "Your company's customer and order databases are often under heavy load. This makes performing analytics against them difficult without harming operations. The databases are in a MySQL cluster, with nightly backups taken using mysqldump. You want to perform analytics with minimal impact on operations. What should you do?",
        "options": {
            "A": "Add a node to the MySQL cluster and build an OLAP cube there.",
            "B": "Use an ETL tool to load the data from MySQL into Google BigQuery.",
            "C": "Connect an on-premises Apache Hadoop cluster to MySQL and perform ETL.",
            "D": "Mount the backups to Google Cloud SQL, and then process the data using Google Cloud Dataproc."
        },
        "answer": "B",
        "reason": "Bigquery is most suitable for analytical purposes and the question is asking about 'minimal impact' on current DB"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "31",
        "question": "You have Google Cloud Dataflow streaming pipeline running with a Google Cloud Pub/Sub subscription as the source. You need to make an update to the code that will make the new Cloud Dataflow pipeline incompatible with the current version. You do not want to lose any data when making this update. What should you do?",
        "options": {
            "A": "Update the current pipeline and use the drain flag.",
            "B": "Update the current pipeline and provide the transform mapping JSON object.",
            "C": "Create a new pipeline that has the same Cloud Pub/Sub subscription and cancel the old pipeline.",
            "D": "Create a new pipeline that has a new Cloud Pub/Sub subscription and cancel the old pipeline."
        },
        "answer": "A",
        "reason": "Drain options would cause Dataflow to stop any new processing, but would also allow the existing processing to complete."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "32",
        "question": "Your company is running their first dynamic campaign, serving different offers by analyzing real-time data during the holiday season. The data scientists are collecting terabytes of data that rapidly grows every hour during their 30-day campaign. They are using Google Cloud Dataflow to preprocess the data and collect the feature (signals) data that is needed for the machine learning model in Google Cloud Bigtable. The team is observing suboptimal performance with reads and writes of their initial load of 10 TB of data. They want to improve this performance while minimizing cost. What should they do?",
        "options": {
            "A": "Redefine the schema by evenly distributing reads and writes across the row space of the table.",
            "B": "The performance issue should be resolved over time as the site of the BigDate cluster is increased.",
            "C": "Redesign the schema to use a single row key to identify values that need to be updated frequently in the cluster.",
            "D": "Redesign the schema to use row keys based on numeric IDs that increase sequentially per user viewing the offers."
        },
        "answer": "A",
        "reason": "Distributing reads and writes evenly across the row space helps prevent hotspots and ensures that the load is spread evenly, avoiding performance bottlenecks. Google Cloud Bigtable's performance is influenced by how well the data is distributed across the tablet servers, and evenly distributing the load can lead to better performance."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "33",
        "question": "Your software uses a simple JSON format for all messages. These messages are published to Google Cloud Pub/Sub, then processed with Google Cloud Dataflow to create a real-time dashboard for the CFO. During testing, you notice that some messages are missing in the dashboard. You check the logs, and all messages are being published to Cloud Pub/Sub successfully. What should you do next?",
        "options": {
            "A": "Check the dashboard application to see if it is not displaying correctly.",
            "B": "Run a fixed dataset through the Cloud Dataflow pipeline and analyze the output.",
            "C": "Use Google Stackdriver Monitoring on Cloud Pub/Sub to find the missing messages.",
            "D": "Switch Cloud Dataflow to pull messages from Cloud Pub/Sub instead of Cloud Pub/Sub pushing messages to Cloud Dataflow."
        },
        "answer": "B",
        "reason": "By running a fixed dataset through the Cloud Dataflow pipeline, you can determine if the problem lies within the data processing stage. This allows you to identify any issues with data transformation, filtering, or processing in your pipeline. Analyzing the output from this fixed dataset will help you isolate the problem and confirm whether it's related to data processing or the dashboard application."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "34",
        "question": "Flowlogistic Case Study -\nCompany Overview -\nFlowlogistic is a leading logistics and supply chain provider. They help businesses throughout the world manage their resources and transport them to their final destination. The company has grown rapidly, expanding their offerings to include rail, truck, aircraft, and oceanic shipping.\nCompany Background -\nThe company started as a regional trucking company, and then expanded into other logistics market. Because they have not updated their infrastructure, managing and tracking orders and shipments has become a bottleneck. To improve operations, Flowlogistic developed proprietary technology for tracking shipments in real time at the parcel level. However, they are unable to deploy it because their technology stack, based on Apache Kafka, cannot support the processing volume. In addition, Flowlogistic wants to further analyze their orders and shipments to determine how best to deploy their resources.\nSolution Concept -\nFlowlogistic wants to implement two concepts using the cloud:\n\u2711 Use their proprietary technology in a real-time inventory-tracking system that indicates the location of their loads\n\u2711 Perform analytics on all their orders and shipment logs, which contain both structured and unstructured data, to determine how best to deploy resources, which markets to expand info. They also want to use predictive analytics to learn earlier when a shipment will be delayed.\nExisting Technical Environment -\nFlowlogistic architecture resides in a single data center:\n\u2711 Databases\n8 physical servers in 2 clusters\n- SQL Server `\" user data, inventory, static data\n3 physical servers\n- Cassandra `\" metadata, tracking messages\n10 Kafka servers `\" tracking message aggregation and batch insert\n\u2711 Application servers `\" customer front end, middleware for order/customs\n60 virtual machines across 20 physical servers\n- Tomcat `\" Java services\n- Nginx `\" static content\n- Batch servers\n\u2711 Storage appliances\n-  iSCSI for virtual machine (VM) hosts\n-  Fibre Channel storage area network (FC SAN) `\" SQL server storage\n-  Network-attached storage (NAS) image storage, logs, backups\n\u2711 10 Apache Hadoop /Spark servers\n- Core Data Lake\n- Data analysis workloads\n\u2711 20 miscellaneous servers\n- Jenkins, monitoring, bastion hosts,\nBusiness Requirements -\nBuild a reliable and reproducible environment with scaled panty of production.\n\u2711 Aggregate data in a centralized Data Lake for analysis\n\u2711 Use historical data to perform predictive analytics on future shipments\n\u2711 Accurately track every shipment worldwide using proprietary technology\n\u2711 Improve business agility and speed of innovation through rapid provisioning of new resources\n\u2711 Analyze and optimize architecture for performance in the cloud\n\u2711 Migrate fully to the cloud if all other requirements are met\nTechnical Requirements -\n\u2711 Handle both streaming and batch data\n\u2711 Migrate existing Hadoop workloads\n\u2711 Ensure architecture is scalable and elastic to meet the changing demands of the company.\n\u2711 Use managed services whenever possible\n\u2711 Encrypt data flight and at rest\n\u2711 Connect a VPN between the production data center and cloud environment\nSEO Statement -\nWe have grown so quickly that our inability to upgrade our infrastructure is really hampering further growth and efficiency. We are efficient at moving shipments around the world, but we are inefficient at moving data around.\nWe need to organize our information so we can more easily understand where our customers are and what they are shipping.\nCTO Statement -\nIT has never been a priority for us, so as our data has grown, we have not invested enough in our technology. I have a good staff to manage IT, but they are so busy managing our infrastructure that I cannot get them to do the things that really matter, such as organizing our data, building the analytics, and figuring out how to implement the CFO' s tracking technology.\nCFO Statement -\nPart of our competitive advantage is that we penalize ourselves for late shipments and deliveries. Knowing where out shipments are at all times has a direct correlation to our bottom line and profitability. Additionally, I don't want to commit capital to building out a server environment.\nFlowlogistic wants to use Google BigQuery as their primary analysis system, but they still have Apache Hadoop and Spark workloads that they cannot move to BigQuery. Flowlogistic does not know how to store the data that is common to both workloads. What should they do?",
        "options": {
            "A": "Store the common data in BigQuery as partitioned tables.",
            "B": "Store the common data in BigQuery and expose authorized views.",
            "C": "Store the common data encoded as Avro in Google Cloud Storage.",
            "D": "Store he common data in the HDFS storage for a Google Cloud Dataproc cluster."
        },
        "answer": "C",
        "reason": "This approach allows for interoperability between BigQuery and Hadoop/Spark as Avro is a commonly used data serialization format that can be read by both systems. Data stored in Google Cloud Storage can be accessed by both BigQuery and Dataproc, providing a bridge between the two environments. Additionally, you can set up data transformation pipelines in Dataproc to work with this data."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "35",
        "question": "Flowlogistic Case Study -\nCompany Overview -\nFlowlogistic is a leading logistics and supply chain provider. They help businesses throughout the world manage their resources and transport them to their final destination. The company has grown rapidly, expanding their offerings to include rail, truck, aircraft, and oceanic shipping.\nCompany Background -\nThe company started as a regional trucking company, and then expanded into other logistics market. Because they have not updated their infrastructure, managing and tracking orders and shipments has become a bottleneck. To improve operations, Flowlogistic developed proprietary technology for tracking shipments in real time at the parcel level. However, they are unable to deploy it because their technology stack, based on Apache Kafka, cannot support the processing volume. In addition, Flowlogistic wants to further analyze their orders and shipments to determine how best to deploy their resources.\nSolution Concept -\nFlowlogistic wants to implement two concepts using the cloud:\n\u2711 Use their proprietary technology in a real-time inventory-tracking system that indicates the location of their loads\n\u2711 Perform analytics on all their orders and shipment logs, which contain both structured and unstructured data, to determine how best to deploy resources, which markets to expand info. They also want to use predictive analytics to learn earlier when a shipment will be delayed.\nExisting Technical Environment -\nFlowlogistic architecture resides in a single data center:\n\u2711 Databases\n8 physical servers in 2 clusters\n- SQL Server `\" user data, inventory, static data\n3 physical servers\n- Cassandra `\" metadata, tracking messages\n10 Kafka servers `\" tracking message aggregation and batch insert\n\u2711 Application servers `\" customer front end, middleware for order/customs\n60 virtual machines across 20 physical servers\n- Tomcat `\" Java services\n- Nginx `\" static content\n- Batch servers\n\u2711 Storage appliances\n- iSCSI for virtual machine (VM) hosts\n- Fibre Channel storage area network (FC SAN) `\" SQL server storage\n- Network-attached storage (NAS) image storage, logs, backups\n\u2711 10 Apache Hadoop /Spark servers\n- Core Data Lake\n- Data analysis workloads\n\u2711 20 miscellaneous servers\n- Jenkins, monitoring, bastion hosts,\nBusiness Requirements -\n\u2711 Build a reliable and reproducible environment with scaled panty of production.\n\u2711 Aggregate data in a centralized Data Lake for analysis\n\u2711 Use historical data to perform predictive analytics on future shipments\n\u2711 Accurately track every shipment worldwide using proprietary technology\n\u2711 Improve business agility and speed of innovation through rapid provisioning of new resources\n\u2711 Analyze and optimize architecture for performance in the cloud\n\u2711 Migrate fully to the cloud if all other requirements are met\nTechnical Requirements -\n\u2711 Handle both streaming and batch data\n\u2711 Migrate existing Hadoop workloads\n\u2711 Ensure architecture is scalable and elastic to meet the changing demands of the company.\n\u2711 Use managed services whenever possible\n\u2711 Encrypt data flight and at rest\n\u2711 Connect a VPN between the production data center and cloud environment\nSEO Statement -\nWe have grown so quickly that our inability to upgrade our infrastructure is really hampering further growth and efficiency. We are efficient at moving shipments around the world, but we are inefficient at moving data around.\nWe need to organize our information so we can more easily understand where our customers are and what they are shipping.\nCTO Statement -\nIT has never been a priority for us, so as our data has grown, we have not invested enough in our technology. I have a good staff to manage IT, but they are so busy managing our infrastructure that I cannot get them to do the things that really matter, such as organizing our data, building the analytics, and figuring out how to implement the CFO' s tracking technology.\nCFO Statement -\nPart of our competitive advantage is that we penalize ourselves for late shipments and deliveries. Knowing where out shipments are at all times has a direct correlation to our bottom line and profitability. Additionally, I don't want to commit capital to building out a server environment.\nFlowlogistic's management has determined that the current Apache Kafka servers cannot handle the data volume for their real-time inventory tracking system. You need to build a new system on Google Cloud Platform (GCP) that will feed the proprietary tracking software. The system must be able to ingest data from a variety of global sources, process and query in real-time, and store the data reliably. Which combination of GCP products should you choose?",
        "options": {
            "A": "Cloud Pub/Sub, Cloud Dataflow, and Cloud Storage",
            "B": "Cloud Pub/Sub, Cloud Dataflow, and Local SSD",
            "C": "Cloud Pub/Sub, Cloud SQL, and Cloud Storage",
            "D": "Cloud Load Balancing, Cloud Dataflow, and Cloud Storage"
        },
        "answer": "A",
        "reason": "Cloud Pub/Sub: It is used for ingesting real-time data from various global sources. It's a messaging service that can handle large volumes of data and is highly scalable.\nCloud Dataflow: It's a stream and batch data processing service that allows you to process and analyze the data in real-time. It can take data from Pub/Sub and perform transformations or aggregations as needed.\nCloud Storage: It provides reliable storage for the data. You can store the processed data in Cloud Storage for further analysis, and it is a scalable and durable storage solution."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "36",
        "question": "Flowlogistic Case Study -\nCompany Overview -\nFlowlogistic is a leading logistics and supply chain provider. They help businesses throughout the world manage their resources and transport them to their final destination. The company has grown rapidly, expanding their offerings to include rail, truck, aircraft, and oceanic shipping.\nCompany Background -\nThe company started as a regional trucking company, and then expanded into other logistics market. Because they have not updated their infrastructure, managing and tracking orders and shipments has become a bottleneck. To improve operations, Flowlogistic developed proprietary technology for tracking shipments in real time at the parcel level. However, they are unable to deploy it because their technology stack, based on Apache Kafka, cannot support the processing volume. In addition, Flowlogistic wants to further analyze their orders and shipments to determine how best to deploy their resources.\nSolution Concept -\nFlowlogistic wants to implement two concepts using the cloud:\nUse their proprietary technology in a real-time inventory-tracking system that indicates the location of their loads\n\u2711 Perform analytics on all their orders and shipment logs, which contain both structured and unstructured data, to determine how best to deploy resources, which markets to expand info. They also want to use predictive analytics to learn earlier when a shipment will be delayed.\nExisting Technical Environment -\nFlowlogistic architecture resides in a single data center:\n\u2711 Databases\n8 physical servers in 2 clusters\n- SQL Server `\" user data, inventory, static data\n3 physical servers\n- Cassandra `\" metadata, tracking messages\n10 Kafka servers `\" tracking message aggregation and batch insert\n\u2711 Application servers `\" customer front end, middleware for order/customs\n60 virtual machines across 20 physical servers\n- Tomcat `\" Java services\n- Nginx `\" static content\n- Batch servers\n\u2711 Storage appliances\n- iSCSI for virtual machine (VM) hosts\n- Fibre Channel storage area network (FC SAN) `\" SQL server storage\n- Network-attached storage (NAS) image storage, logs, backups\n\u2711 10 Apache Hadoop /Spark servers\n- Core Data Lake\n- Data analysis workloads\n\u2711 20 miscellaneous servers\n- Jenkins, monitoring, bastion hosts,\nBusiness Requirements -\n\u2711 Build a reliable and reproducible environment with scaled panty of production.\n\u2711 Aggregate data in a centralized Data Lake for analysis\n\u2711 Use historical data to perform predictive analytics on future shipments\n\u2711 Accurately track every shipment worldwide using proprietary technology\n\u2711 Improve business agility and speed of innovation through rapid provisioning of new resources\n\u2711 Analyze and optimize architecture for performance in the cloud\n\u2711 Migrate fully to the cloud if all other requirements are met\nTechnical Requirements -\nHandle both streaming and batch data\n\u2711 Migrate existing Hadoop workloads\n\u2711 Ensure architecture is scalable and elastic to meet the changing demands of the company.\n\u2711 Use managed services whenever possible\n\u2711 Encrypt data flight and at rest\n\u2711 Connect a VPN between the production data center and cloud environment\nSEO Statement -\nWe have grown so quickly that our inability to upgrade our infrastructure is really hampering further growth and efficiency. We are efficient at moving shipments around the world, but we are inefficient at moving data around.\nWe need to organize our information so we can more easily understand where our customers are and what they are shipping.\nCTO Statement -\nIT has never been a priority for us, so as our data has grown, we have not invested enough in our technology. I have a good staff to manage IT, but they are so busy managing our infrastructure that I cannot get them to do the things that really matter, such as organizing our data, building the analytics, and figuring out how to implement the CFO' s tracking technology.\nCFO Statement -\nPart of our competitive advantage is that we penalize ourselves for late shipments and deliveries. Knowing where out shipments are at all times has a direct correlation to our bottom line and profitability. Additionally, I don't want to commit capital to building out a server environment.\nFlowlogistic's CEO wants to gain rapid insight into their customer base so his sales team can be better informed in the field. This team is not very technical, so they've purchased a visualization tool to simplify the creation of BigQuery reports. However, they've been overwhelmed by all the data in the table, and are spending a lot of money on queries trying to find the data they need. You want to solve their problem in the most cost-effective way. What should you do?",
        "options": {
            "A": "Export the data into a Google Sheet for virtualization.",
            "B": "Create an additional table with only the necessary columns.",
            "C": "Create a view on the table to present to the virtualization tool.",
            "D": "Create identity and access management (IAM) roles on the appropriate columns, so only they appear in a query."
        },
        "answer": "C",
        "reason": "Creating a view in BigQuery allows you to define a virtual table that is a subset of the original data, containing only the necessary columns or filtered data that the sales team requires for their reports. This approach is cost-effective because it doesn't involve exporting data to external tools or creating additional tables, and it ensures that the sales team is working with the specific data they need without running expensive queries on the full dataset. It simplifies the data for non-technical users while keeping the data in BigQuery, which is a powerful and cost-efficient data warehousing solution."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "37",
        "question": "Flowlogistic Case Study -\nCompany Overview -\nFlowlogistic is a leading logistics and supply chain provider. They help businesses throughout the world manage their resources and transport them to their final destination. The company has grown rapidly, expanding their offerings to include rail, truck, aircraft, and oceanic shipping.\nCompany Background -\nThe company started as a regional trucking company, and then expanded into other logistics market. Because they have not updated their infrastructure, managing and tracking orders and shipments has become a bottleneck. To improve operations, Flowlogistic developed proprietary technology for tracking shipments in real time at the parcel level. However, they are unable to deploy it because their technology stack, based on Apache Kafka, cannot support the processing volume. In addition, Flowlogistic wants to further analyze their orders and shipments to determine how best to deploy their resources.\nSolution Concept -\nFlowlogistic wants to implement two concepts using the cloud:\n\u2711 Use their proprietary technology in a real-time inventory-tracking system that indicates the location of their loads\n\u2711 Perform analytics on all their orders and shipment logs, which contain both structured and unstructured data, to determine how best to deploy resources, which markets to expand info. They also want to use predictive analytics to learn earlier when a shipment will be delayed.\nExisting Technical Environment -\nFlowlogistic architecture resides in a single data center:\n\u2711 Databases\n8 physical servers in 2 clusters\n- SQL Server `\" user data, inventory, static data\n3 physical servers\n- Cassandra `\" metadata, tracking messages\n10 Kafka servers `\" tracking message aggregation and batch insert\n\u2711 Application servers `\" customer front end, middleware for order/customs\n60 virtual machines across 20 physical servers\n- Tomcat `\" Java services\n- Nginx `\" static content\n- Batch servers\n\u2711 Storage appliances\n- iSCSI for virtual machine (VM) hosts\n- Fibre Channel storage area network (FC SAN) `\" SQL server storage\n- Network-attached storage (NAS) image storage, logs, backups\n\u2711 10 Apache Hadoop /Spark servers\n- Core Data Lake\n- Data analysis workloads\n\u2711 20 miscellaneous servers\n- Jenkins, monitoring, bastion hosts,\nBusiness Requirements -\n\u2711 Build a reliable and reproducible environment with scaled panty of production.\n\u2711 Aggregate data in a centralized Data Lake for analysis\n\u2711 Use historical data to perform predictive analytics on future shipments\n\u2711 Accurately track every shipment worldwide using proprietary technology\n\u2711 Improve business agility and speed of innovation through rapid provisioning of new resources\n\u2711 Analyze and optimize architecture for performance in the cloud\n\u2711 Migrate fully to the cloud if all other requirements are met\nTechnical Requirements -\n\u2711 Handle both streaming and batch data\n\u2711 Migrate existing Hadoop workloads\n\u2711 Ensure architecture is scalable and elastic to meet the changing demands of the company.\n\u2711 Use managed services whenever possible\n\u2711 Encrypt data flight and at rest\n\u2711 Connect a VPN between the production data center and cloud environment\nSEO Statement -\nWe have grown so quickly that our inability to upgrade our infrastructure is really hampering further growth and efficiency. We are efficient at moving shipments around the world, but we are inefficient at moving data around.\nWe need to organize our information so we can more easily understand where our customers are and what they are shipping.\nCTO Statement -\nIT has never been a priority for us, so as our data has grown, we have not invested enough in our technology. I have a good staff to manage IT, but they are so busy managing our infrastructure that I cannot get them to do the things that really matter, such as organizing our data, building the analytics, and figuring out how to implement the CFO' s tracking technology.\nCFO Statement -\nPart of our competitive advantage is that we penalize ourselves for late shipments and deliveries. Knowing where out shipments are at all times has a direct correlation to our bottom line and profitability. Additionally, I don't want to commit capital to building out a server environment.\nFlowlogistic is rolling out their real-time inventory tracking system. The tracking devices will all send package-tracking messages, which will now go to a single Google Cloud Pub/Sub topic instead of the Apache Kafka cluster. A subscriber application will then process the messages for real-time reporting and store them in Google BigQuery for historical analysis. You want to ensure the package data can be analyzed over time. Which approach should you take?",
        "options": {
            "A": "Attach the timestamp on each message in the Cloud Pub/Sub subscriber application as they are received.",
            "B": "Attach the timestamp and Package ID on the outbound message from each publisher device as they are sent to Clod Pub/Sub.",
            "C": "Use the NOW () function in BigQuery to record the event's time.",
            "D": "Use the automatically generated timestamp from Cloud Pub/Sub to order the data."
        },
        "answer": "B",
        "reason": "By attaching a timestamp and Package ID at the point of origin (publisher device), you ensure that each message has a clear and consistent timestamp associated with it from the moment it is generated. This provides a reliable and accurate record of when each package-tracking message was created, which is crucial for analyzing the data over time."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "38",
        "question": "MJTelco Case Study -\nCompany Overview -\nMJTelco is a startup that plans to build networks in rapidly growing, underserved markets around the world. The company has patents for innovative optical communications hardware. Based on these patents, they can create many reliable, high-speed backbone links with inexpensive hardware.\nCompany Background -\nFounded by experienced telecom executives, MJTelco uses technologies originally developed to overcome communications challenges in space. Fundamental to their operation, they need to create a distributed data infrastructure that drives real-time analysis and incorporates machine learning to continuously optimize their topologies. Because their hardware is inexpensive, they plan to overdeploy the network allowing them to account for the impact of dynamic regional politics on location availability and cost.\nTheir management and operations teams are situated all around the globe creating many-to-many relationship between data consumers and provides in their system. After careful consideration, they decided public cloud is the perfect environment to support their needs.\nSolution Concept -\nMJTelco is running a successful proof-of-concept (PoC) project in its labs. They have two primary needs:\n\u2711 Scale and harden their PoC to support significantly more data flows generated when they ramp to more than 50,000 installations.\n\u2711 Refine their machine-learning cycles to verify and improve the dynamic models they use to control topology definition.\nMJTelco will also use three separate operating environments `\" development/test, staging, and production `\" to meet the needs of running experiments, deploying new features, and serving production customers.\nBusiness Requirements -\n\u2711 Scale up their production environment with minimal cost, instantiating resources when and where needed in an unpredictable, distributed telecom user community.\n\u2711 Ensure security of their proprietary data to protect their leading-edge machine learning and analysis.\n\u2711 Provide reliable and timely access to data for analysis from distributed research workers\n\u2711 Maintain isolated environments that support rapid iteration of their machine-learning models without affecting their customers.\nTechnical Requirements -\n\u2711 Ensure secure and efficient transport and storage of telemetry data\n\u2711 Rapidly scale instances to support between 10,000 and 100,000 data providers with multiple flows each.\n\u2711 Allow analysis and presentation against data tables tracking up to 2 years of data storing approximately 100m records/day\n\u2711 Support rapid iteration of monitoring infrastructure focused on awareness of data pipeline problems both in telemetry flows and in production learning cycles.\nCEO Statement -\nOur business model relies on our patents, analytics and dynamic machine learning. Our inexpensive hardware is organized to be highly reliable, which gives us cost advantages. We need to quickly stabilize our large distributed data pipelines to meet our reliability and capacity commitments.\nCTO Statement -\nOur public cloud services must operate as advertised. We need resources that scale and keep our data secure. We also need environments in which our data scientists can carefully study and quickly adapt our models. Because we rely on automation to process our data, we also need our development and test environments to work as we iterate.\nCFO Statement -\nThe project is too large for us to maintain the hardware and software required for the data and analysis. Also, we cannot afford to staff an operations team to monitor so many data feeds, so we will rely on automation and infrastructure. Google Cloud's machine learning will allow our quantitative researchers to work on our high-value problems instead of problems with our data pipelines.\nMJTelco's Google Cloud Dataflow pipeline is now ready to start receiving data from the 50,000 installations. You want to allow Cloud Dataflow to scale its compute power up as required. Which Cloud Dataflow pipeline configuration setting should you update?",
        "options": {
            "A": "The zone",
            "B": "The number of workers",
            "C": "The disk size per worker",
            "D": "The maximum number of workers"
        },
        "answer": "D",
        "reason": "Cloud Dataflow dynamically scales the number of workers based on the amount of data being processed and the processing requirements. By updating the maximum number of workers, you allow Dataflow to scale up the compute power as needed to handle the workload efficiently. This ensures that the pipeline can adapt to changes in data volume and processing demands."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "39",
        "question": "MJTelco Case Study -\nCompany Overview -\nMJTelco is a startup that plans to build networks in rapidly growing, underserved markets around the world. The company has patents for innovative optical communications hardware. Based on these patents, they can create many reliable, high-speed backbone links with inexpensive hardware.\nCompany Background -\nFounded by experienced telecom executives, MJTelco uses technologies originally developed to overcome communications challenges in space. Fundamental to their operation, they need to create a distributed data infrastructure that drives real-time analysis and incorporates machine learning to continuously optimize their topologies. Because their hardware is inexpensive, they plan to overdeploy the network allowing them to account for the impact of dynamic regional politics on location availability and cost.\nTheir management and operations teams are situated all around the globe creating many-to-many relationship between data consumers and provides in their system. After careful consideration, they decided public cloud is the perfect environment to support their needs.\nSolution Concept -\nMJTelco is running a successful proof-of-concept (PoC) project in its labs. They have two primary needs:\n\u2711 Scale and harden their PoC to support significantly more data flows generated when they ramp to more than 50,000 installations.\n\u2711 Refine their machine-learning cycles to verify and improve the dynamic models they use to control topology definition.\nMJTelco will also use three separate operating environments `\" development/test, staging, and production `\" to meet the needs of running experiments, deploying new features, and serving production customers.\nBusiness Requirements -\n\u2711 Scale up their production environment with minimal cost, instantiating resources when and where needed in an unpredictable, distributed telecom user community.\n\u2711 Ensure security of their proprietary data to protect their leading-edge machine learning and analysis.\n\u2711 Provide reliable and timely access to data for analysis from distributed research workers\nMaintain isolated environments that support rapid iteration of their machine-learning models without affecting their customers.\nTechnical Requirements -\n\u2711 Ensure secure and efficient transport and storage of telemetry data\n\u2711 Rapidly scale instances to support between 10,000 and 100,000 data providers with multiple flows each.\n\u2711 Allow analysis and presentation against data tables tracking up to 2 years of data storing approximately 100m records/day\n\u2711 Support rapid iteration of monitoring infrastructure focused on awareness of data pipeline problems both in telemetry flows and in production learning cycles.\nCEO Statement -\nOur business model relies on our patents, analytics and dynamic machine learning. Our inexpensive hardware is organized to be highly reliable, which gives us cost advantages. We need to quickly stabilize our large distributed data pipelines to meet our reliability and capacity commitments.\nCTO Statement -\nOur public cloud services must operate as advertised. We need resources that scale and keep our data secure. We also need environments in which our data scientists can carefully study and quickly adapt our models. Because we rely on automation to process our data, we also need our development and test environments to work as we iterate.\nCFO Statement -\nThe project is too large for us to maintain the hardware and software required for the data and analysis. Also, we cannot afford to staff an operations team to monitor so many data feeds, so we will rely on automation and infrastructure. Google Cloud's machine learning will allow our quantitative researchers to work on our high-value problems instead of problems with our data pipelines.\nYou need to compose visualizations for operations teams with the following requirements:\n\u2711 The report must include telemetry data from all 50,000 installations for the most resent 6 weeks (sampling once every minute).\n\u2711 The report must not be more than 3 hours delayed from live data.\n\u2711 The actionable report should only show suboptimal links.\n\u2711 Most suboptimal links should be sorted to the top.\n\u2711 Suboptimal links can be grouped and filtered by regional geography.\n\u2711 User response time to load the report must be <5 seconds.\nWhich approach meets the requirements?",
        "options": {
            "A": "Load the data into Google Sheets, use formulas to calculate a metric, and use filters/sorting to show only suboptimal links in a table.",
            "B": "Load the data into Google BigQuery tables, write Google Apps Script that queries the data, calculates the metric, and shows only suboptimal rows in a table in Google Sheets.",
            "C": "Load the data into Google Cloud Datastore tables, write a Google App Engine Application that queries all rows, applies a function to derive the metric, and then renders results in a table using the Google charts and visualization API.",
            "D": "Load the data into Google BigQuery tables, write a Google Data Studio 360 report that connects to your data, calculates a metric, and then uses a filter expression to show only suboptimal rows in a table."
        },
        "answer": "D",
        "reason": "Google BigQuery is a powerful data warehouse for processing and analyzing large datasets. It can efficiently handle the telemetry data from all 50,000 installations. Google Data Studio 360 is designed for creating interactive and visually appealing reports and dashboards."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "40",
        "question": "MJTelco Case Study -\nCompany Overview -\nMJTelco is a startup that plans to build networks in rapidly growing, underserved markets around the world. The company has patents for innovative optical communications hardware. Based on these patents, they can create many reliable, high-speed backbone links with inexpensive hardware.\nCompany Background -\nFounded by experienced telecom executives, MJTelco uses technologies originally developed to overcome communications challenges in space. Fundamental to their operation, they need to create a distributed data infrastructure that drives real-time analysis and incorporates machine learning to continuously optimize their topologies. Because their hardware is inexpensive, they plan to overdeploy the network allowing them to account for the impact of dynamic regional politics on location availability and cost.\nTheir management and operations teams are situated all around the globe creating many-to-many relationship between data consumers and provides in their system. After careful consideration, they decided public cloud is the perfect environment to support their needs.\nSolution Concept -\nMJTelco is running a successful proof-of-concept (PoC) project in its labs. They have two primary needs:\n\u2711 Scale and harden their PoC to support significantly more data flows generated when they ramp to more than 50,000 installations.\n\u2711 Refine their machine-learning cycles to verify and improve the dynamic models they use to control topology definition.\nMJTelco will also use three separate operating environments `\" development/test, staging, and production `\" to meet the needs of running experiments, deploying new features, and serving production customers.\nBusiness Requirements -\n\u2711 Scale up their production environment with minimal cost, instantiating resources when and where needed in an unpredictable, distributed telecom user community.\n\u2711 Ensure security of their proprietary data to protect their leading-edge machine learning and analysis.\nProvide reliable and timely access to data for analysis from distributed research workers\n\u2711 Maintain isolated environments that support rapid iteration of their machine-learning models without affecting their customers.\nTechnical Requirements -\n\u2711 Ensure secure and efficient transport and storage of telemetry data\n\u2711 Rapidly scale instances to support between 10,000 and 100,000 data providers with multiple flows each.\n\u2711 Allow analysis and presentation against data tables tracking up to 2 years of data storing approximately 100m records/day\n\u2711 Support rapid iteration of monitoring infrastructure focused on awareness of data pipeline problems both in telemetry flows and in production learning cycles.\nCEO Statement -\nOur business model relies on our patents, analytics and dynamic machine learning. Our inexpensive hardware is organized to be highly reliable, which gives us cost advantages. We need to quickly stabilize our large distributed data pipelines to meet our reliability and capacity commitments.\nCTO Statement -\nOur public cloud services must operate as advertised. We need resources that scale and keep our data secure. We also need environments in which our data scientists can carefully study and quickly adapt our models. Because we rely on automation to process our data, we also need our development and test environments to work as we iterate.\nCFO Statement -\nThe project is too large for us to maintain the hardware and software required for the data and analysis. Also, we cannot afford to staff an operations team to monitor so many data feeds, so we will rely on automation and infrastructure. Google Cloud's machine learning will allow our quantitative researchers to work on our high-value problems instead of problems with our data pipelines.\nYou create a new report for your large team in Google Data Studio 360. The report uses Google BigQuery as its data source. It is company policy to ensure employees can view only the data associated with their region, so you create and populate a table for each region. You need to enforce the regional access policy to the data.\nWhich two actions should you take? (Choose two.)",
        "options": {
            "A": "Ensure all the tables are included in global dataset.",
            "B": "Ensure each table is included in a dataset for a region.",
            "C": "Adjust the settings for each table to allow a related region-based security group view access.",
            "D": "Adjust the settings for each view to allow a related region-based security group view access.",
            "E": "Adjust the settings for each dataset to allow a related region-based security group view access."
        },
        "answer": "BE",
        "reason": "This means that you should organize your data in BigQuery into separate datasets, one for each region. Each dataset contains the tables specific to that region. This ensures that data is segregated by region. Adjust the settings for each dataset to allow a related region-based security group view access."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "41",
        "question": "MJTelco Case Study -\nCompany Overview -\nMJTelco is a startup that plans to build networks in rapidly growing, underserved markets around the world. The company has patents for innovative optical communications hardware. Based on these patents, they can create many reliable, high-speed backbone links with inexpensive hardware.\nCompany Background -\nFounded by experienced telecom executives, MJTelco uses technologies originally developed to overcome communications challenges in space. Fundamental to their operation, they need to create a distributed data infrastructure that drives real-time analysis and incorporates machine learning to continuously optimize their topologies. Because their hardware is inexpensive, they plan to overdeploy the network allowing them to account for the impact of dynamic regional politics on location availability and cost.\nTheir management and operations teams are situated all around the globe creating many-to-many relationship between data consumers and provides in their system. After careful consideration, they decided public cloud is the perfect environment to support their needs.\nSolution Concept -\nMJTelco is running a successful proof-of-concept (PoC) project in its labs. They have two primary needs:\n\u2711 Scale and harden their PoC to support significantly more data flows generated when they ramp to more than 50,000 installations.\n\u2711 Refine their machine-learning cycles to verify and improve the dynamic models they use to control topology definition.\nMJTelco will also use three separate operating environments `\" development/test, staging, and production `\" to meet the needs of running experiments, deploying new features, and serving production customers.\nBusiness Requirements -\n\u2711 Scale up their production environment with minimal cost, instantiating resources when and where needed in an unpredictable, distributed telecom user community.\n\u2711 Ensure security of their proprietary data to protect their leading-edge machine learning and analysis.\n\u2711 Provide reliable and timely access to data for analysis from distributed research workers\n\u2711 Maintain isolated environments that support rapid iteration of their machine-learning models without affecting their customers.\nTechnical Requirements -\nEnsure secure and efficient transport and storage of telemetry data\n\u2711 Rapidly scale instances to support between 10,000 and 100,000 data providers with multiple flows each.\n\u2711 Allow analysis and presentation against data tables tracking up to 2 years of data storing approximately 100m records/day\n\u2711 Support rapid iteration of monitoring infrastructure focused on awareness of data pipeline problems both in telemetry flows and in production learning cycles.\nCEO Statement -\nOur business model relies on our patents, analytics and dynamic machine learning. Our inexpensive hardware is organized to be highly reliable, which gives us cost advantages. We need to quickly stabilize our large distributed data pipelines to meet our reliability and capacity commitments.\nCTO Statement -\nOur public cloud services must operate as advertised. We need resources that scale and keep our data secure. We also need environments in which our data scientists can carefully study and quickly adapt our models. Because we rely on automation to process our data, we also need our development and test environments to work as we iterate.\nCFO Statement -\nThe project is too large for us to maintain the hardware and software required for the data and analysis. Also, we cannot afford to staff an operations team to monitor so many data feeds, so we will rely on automation and infrastructure. Google Cloud's machine learning will allow our quantitative researchers to work on our high-value problems instead of problems with our data pipelines.\nMJTelco needs you to create a schema in Google Bigtable that will allow for the historical analysis of the last 2 years of records. Each record that comes in is sent every 15 minutes, and contains a unique identifier of the device and a data record. The most common query is for all the data for a given device for a given day.\nWhich schema should you use?",
        "options": {
            "A": "Rowkey: date#device_id Column data: data_point",
            "B": "Rowkey: date Column data: device_id, data_point",
            "C": "Rowkey: device_id Column data: date, data_point",
            "D": "Rowkey: data_point Column data: device_id, date",
            "E": "Rowkey: date#data_point Column data: device_id"
        },
        "answer": "A",
        "reason": "The most common query is for all data for a given device on a given day. This schema directly matches the query pattern by including both date and device_id in the row key."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "42",
        "question": "Your company has recently grown rapidly and now ingesting data at a significantly higher rate than it was previously. You manage the daily batch MapReduce analytics jobs in Apache Hadoop. However, the recent increase in data has meant the batch jobs are falling behind. You were asked to recommend ways the development team could increase the responsiveness of the analytics without increasing costs. What should you recommend they do?",
        "options": {
            "A": "Rewrite the job in Pig.",
            "B": "Rewrite the job in Apache Spark.",
            "C": "Increase the size of the Hadoop cluster.",
            "D": "Decrease the size of the Hadoop cluster but also rewrite the job in Hive."
        },
        "answer": "B",
        "reason": "Spark performs in-memory processing and faster, which results in optimization of job’s processing time"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "43",
        "question": "You work for a large fast food restaurant chain with over 400,000 employees. You store employee information in Google BigQuery in a Users table consisting of a FirstName field and a LastName field. A member of IT is building an application and asks you to modify the schema and data in BigQuery so the application can query a FullName field consisting of the value of the FirstName field concatenated with a space, followed by the value of the LastName field for each employee. How can you make that data available while minimizing cost?",
        "options": {
            "A": "Create a view in BigQuery that concatenates the FirstName and LastName field values to produce the FullName.",
            "B": "Add a new column called FullName to the Users table. Run an UPDATE statement that updates the FullName column for each user with the concatenation of the FirstName and LastName values.",
            "C": "Create a Google Cloud Dataflow job that queries BigQuery for the entire Users table, concatenates the FirstName value and LastName value for each user, and loads the proper values for FirstName, LastName, and FullName into a new table in BigQuery.",
            "D": "Use BigQuery to export the data for the table to a CSV file. Create a Google Cloud Dataproc job to process the CSV file and output a new CSV file containing the proper values for FirstName, LastName and FullName. Run a BigQuery load job to load the new CSV file into BigQuery."
        },
        "answer": "A",
        "reason": "Answer will be A because when you create View it does not store extra space and its a logical representation, for rest of the option you need to write large code and extra processing for dataflow/dataproc."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "44",
        "question": "You are deploying a new storage system for your mobile application, which is a media streaming service. You decide the best fit is Google Cloud Datastore. You have entities with multiple properties, some of which can take on multiple values. For example, in the entity 'Movie' the property 'actors' and the property 'tags' have multiple values but the property 'date released' does not. A typical query would ask for all movies with actor=<actorname> ordered by date_released or all movies with tag=Comedy ordered by date_released. How should you avoid a combinatorial explosion in the number of indexes?",
        "options": {
            "A": "Manually configure the index in your index config as follows:",
            "B": "Manually configure the index in your index config as follows:",
            "C": "Set the following in your entity options: exclude_from_indexes = 'actors, tags'",
            "D": "Set the following in your entity options: exclude_from_indexes = 'date_published'"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "45",
        "question": "You work for a manufacturing plant that batches application log files together into a single log file once a day at 2:00 AM. You have written a Google Cloud Dataflow job to process that log file. You need to make sure the log file in processed once per day as inexpensively as possible. What should you do?",
        "options": {
            "A": "Change the processing job to use Google Cloud Dataproc instead.",
            "B": "Manually start the Cloud Dataflow job each morning when you get into the office.",
            "C": "Create a cron job with Google App Engine Cron Service to run the Cloud Dataflow job.",
            "D": "Configure the Cloud Dataflow job as a streaming job so that it processes the log data immediately."
        },
        "answer": "C",
        "reason": "Using the Google App Engine Cron Service to run the Cloud Dataflow job allows you to automate the execution of the job. By creating a cron job, you can ensure that the Dataflow job is triggered exactly once per day at a specified time. This approach is automated, reliable, and fits the requirement of processing the log file once per day."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "46",
        "question": "You work for an economic consulting firm that helps companies identify economic trends as they happen. As part of your analysis, you use Google BigQuery to correlate customer data with the average prices of the 100 most common goods sold, including bread, gasoline, milk, and others. The average prices of these goods are updated every 30 minutes. You want to make sure this data stays up to date so you can combine it with other data in BigQuery as cheaply as possible. What should you do?",
        "options": {
            "A": "Load the data every 30 minutes into a new partitioned table in BigQuery.",
            "B": "Store and update the data in a regional Google Cloud Storage bucket and create a federated data source in BigQuery",
            "C": "Store the data in Google Cloud Datastore. Use Google Cloud Dataflow to query BigQuery and combine the data programmatically with the data stored in Cloud Datastore",
            "D": "Store the data in a file in a regional Google Cloud Storage bucket. Use Cloud Dataflow to query BigQuery and combine the data programmatically with the data stored in Google Cloud Storage."
        },
        "answer": "B",
        "reason": "It seems that not all data is in BigQuery but the analysis is done using BigQuery so federated query is the optimal approach"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "47",
        "question": "You are designing the database schema for a machine learning-based food ordering service that will predict what users want to eat. Here is some of the information you need to store:\n\u2711 The user profile: What the user likes and doesn't like to eat\n\u2711 The user account information: Name, address, preferred meal times\n\u2711 The order information: When orders are made, from where, to whom\nThe database will be used to store all the transactional data of the product. You want to optimize the data schema. Which Google Cloud Platform product should you use?",
        "options": {
            "A": "BigQuery",
            "B": "Cloud SQL",
            "C": "Cloud Bigtable",
            "D": "Cloud Datastore"
        },
        "answer": "A",
        "reason": "You want to optimize the data schema + Machine Learning --> Bigquery. So A"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "48",
        "question": "Your company is loading comma-separated values (CSV) files into Google BigQuery. The data is fully imported successfully; however, the imported data is not matching byte-to-byte to the source file. What is the most likely cause of this problem?",
        "options": {
            "A": "The CSV data loaded in BigQuery is not flagged as CSV.",
            "B": "The CSV data has invalid rows that were skipped on import.",
            "C": "The CSV data loaded in BigQuery is not using BigQuery's default encoding.",
            "D": "The CSV data has not gone through an ETL phase before loading into BigQuery."
        },
        "answer": "C",
        "reason": "If you don't specify an encoding, or if you specify UTF-8 encoding when the CSV file is not UTF-8 encoded, BigQuery attempts to convert the data to UTF-8. Generally, your data will be loaded successfully, but it may not match byte-for-byte what you expect."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "49",
        "question": "Your company produces 20,000 files every hour. Each data file is formatted as a comma separated values (CSV) file that is less than 4 KB. All files must be ingested on Google Cloud Platform before they can be processed. Your company site has a 200 ms latency to Google Cloud, and your Internet connection bandwidth is limited as 50 Mbps. You currently deploy a secure FTP (SFTP) server on a virtual machine in Google Compute Engine as the data ingestion point. A local SFTP client runs on a dedicated machine to transmit the CSV files as is. The goal is to make reports with data from the previous day available to the executives by 10:00 a.m. each day. This design is barely able to keep up with the current volume, even though the bandwidth utilization is rather low.\nYou are told that due to seasonality, your company expects the number of files to double for the next three months. Which two actions should you take? (Choose two.)",
        "options": {
            "A": "Introduce data compression for each file to increase the rate file of file transfer.",
            "B": "Contact your internet service provider (ISP) to increase your maximum bandwidth to at least 100 Mbps.",
            "C": "Redesign the data ingestion process to use gsutil tool to send the CSV files to a storage bucket in parallel.",
            "D": "Assemble 1,000 files into a tape archive (TAR) file. Transmit the TAR files instead, and disassemble the CSV files in the cloud upon receiving them.",
            "E": "Create an S3-compatible storage endpoint in your network, and use Google Cloud Storage Transfer Service to transfer on-premises data to the designated storage bucket."
        },
        "answer": "CD",
        "reason": "Parallel uploading the files with -m will increase speed in general.\nmany individual small files are a problem, since each file adds overhead to the processing and upload to GCS, and the upload sped of GCS is proportional to the size. If we pack all the small files in a bigger single TAR, it will improve the overall performance."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "50",
        "question": "You are choosing a NoSQL database to handle telemetry data submitted from millions of Internet-of-Things (IoT) devices. The volume of data is growing at 100 TB per year, and each data entry has about 100 attributes. The data processing pipeline does not require atomicity, consistency, isolation, and durability (ACID). However, high availability and low latency are required. You need to analyze the data by querying against individual fields. Which three databases meet your requirements? (Choose three)",
        "options": {
            "A": "Redis",
            "B": "HBase",
            "C": "MySQL",
            "D": "MongoDB",
            "E": "Cassandra",
            "F": "HDFS with Hive"
        },
        "answer": "BDE",
        "reason": "HBASE is based upon BigTable.\nCassandra is low latency columnar distributed database like BigTable.\nHDFS is low latency distributed file system and Hive will help with running the queries"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "51",
        "question": "You are training a spam classifier. You notice that you are overfitting the training data. Which three actions can you take to resolve this problem? (Choose three.)",
        "options": {
            "A": "Get more training examples",
            "B": "Reduce the number of training examples",
            "C": "Use a smaller set of features",
            "D": "Use a larger set of features",
            "E": "Increase the regularization parameters",
            "F": "Decrease the regularization parameters"
        },
        "answer": "ACE",
        "reason": "We need more data because less data induces overfitting. We need less features to make the problem simpler to learn and not promote learning a very complex function for thousands of features that might not apply to the test data. We also need to use regularization to keep the weights constrained."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "52",
        "question": "You are implementing security best practices on your data pipeline. Currently, you are manually executing jobs as the Project Owner. You want to automate these jobs by taking nightly batch files containing non-public information from Google Cloud Storage, processing them with a Spark Scala job on a Google Cloud Dataproc cluster, and depositing the results into Google BigQuery. How should you securely run this workload?",
        "options": {
            "A": "Restrict the Google Cloud Storage bucket so only you can see the files",
            "B": "Grant the Project Owner role to a service account, and run the job with it",
            "C": "Use a service account with the ability to read the batch files and to write to BigQuery",
            "D": "Use a user account with the Project Viewer role on the Cloud Dataproc cluster to read the batch files and write to BigQuery"
        },
        "answer": "C",
        "reason": "It is best practice to use service accounts with the least privilege necessary to perform a specific task when automating jobs. In this case, the job needs to read the batch files from Cloud Storage and write the results to BigQuery. Therefore, you should create a service account with the ability to read from the Cloud Storage bucket and write to BigQuery, and use that service account to run the job."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "53",
        "question": "You are using Google BigQuery as your data warehouse. Your users report that the following simple query is running very slowly, no matter when they run the query: SELECT country, state, city FROM [myproject:mydataset.mytable] GROUP BY country You check the query plan for the query and see the following output in the Read section of Stage:1: What is the most likely cause of the delay for this query?",
        "options": {
            "A": "Users are running too many concurrent queries in the system",
            "B": "The [myproject:mydataset.mytable] table has too many partitions",
            "C": "Either the state or the city columns in the [myproject:mydataset.mytable] table have too many NULL values",
            "D": "Most rows in the [myproject:mydataset.mytable] table have the same value in the country column, causing data skew"
        },
        "answer": "D",
        "reason": "The Read section of the query plan shows a heavy concentration of processing in one area (as indicated by the pink bar being much longer than the purple bar). This typically indicates data skew, where the majority of the data is processed by a small subset of nodes."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "54",
        "question": "Your globally distributed auction application allows users to bid on items. Occasionally, users place identical bids at nearly identical times, and different application servers process those bids. Each bid event contains the item, amount, user, and timestamp. You want to collate those bid events into a single location in real time to determine which user bid first. What should you do?",
        "options": {
            "A": "Create a file on a shared file and have the application servers write all bid events to that file. Process the file with Apache Hadoop to identify which user bid first.",
            "B": "Have each application server write the bid events to Cloud Pub/Sub as they occur. Push the events from Cloud Pub/Sub to a custom endpoint that writes the bid event information into Cloud SQL.",
            "C": "Set up a MySQL database for each application server to write bid events into. Periodically query each of those distributed MySQL databases and update a master MySQL database with bid event information.",
            "D": "Have each application server write the bid events to Google Cloud Pub/Sub as they occur. Use a pull subscription to pull the bid events using Google Cloud Dataflow. Give the bid for each item to the user in the bid event that is processed first."
        },
        "answer": "D",
        "reason": "While using Cloud Pub/Sub for real-time event streaming is a good choice, pushing events to a custom endpoint that writes to Cloud SQL introduces additional complexity. Custom endpoints need to be maintained, and the process of writing to Cloud SQL might not be as efficient as using a purpose-built data processing service."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "55",
        "question": "Your organization has been collecting and analyzing data in Google BigQuery for 6 months. The majority of the data analyzed is placed in a time-partitioned table named events_partitioned. To reduce the cost of queries, your organization created a view called events, which queries only the last 14 days of data. The view is described in legacy SQL. Next month, existing applications will be connecting to BigQuery to read the events data via an ODBC connection. You need to ensure the applications can connect. Which two actions should you take? (Choose two.)",
        "options": {
            "A": "Create a new view over events using standard SQL",
            "B": "Create a new partitioned table using a standard SQL query",
            "C": "Create a new view over events_partitioned using standard SQL",
            "D": "Create a service account for the ODBC connection to use for authentication",
            "E": "Create a Google Cloud Identity and Access Management (Cloud IAM) role for the ODBC connection and shared \u05d2\u20acevents\u05d2\u20ac"
        },
        "answer": "CD",
        "reason": "A standard SQL query cannot reference a view defined using legacy SQL syntax. In order to connect through ODBC connection, we need to use standard SQL. So, we need to create a new view over events_partitioned table using standard SQL which is C. Need service account to connect through ODBC which is option D."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "56",
        "question": "You have enabled the free integration between Firebase Analytics and Google BigQuery. Firebase now automatically creates a new table daily in BigQuery in the format app_events_YYYYMMDD. You want to query all of the tables for the past 30 days in legacy SQL. What should you do?",
        "options": {
            "A": "Use the TABLE_DATE_RANGE function",
            "B": "Use the WHERE_PARTITIONTIME pseudo column",
            "C": "Use WHERE date BETWEEN YYYY-MM-DD AND YYYY-MM-DD",
            "D": "Use SELECT IF.(date >= YYYY-MM-DD AND date <= YYYY-MM-DD"
        },
        "answer": "A",
        "reason": "The recommended action is to use the TABLE_DATE_RANGE function (option A). This function allows you to specify a range of dates to query across multiple tables."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "57",
        "question": "Your company is currently setting up data pipelines for their campaign. For all the Google Cloud Pub/Sub streaming data, one of the important business requirements is to be able to periodically identify the inputs and their timings during their campaign. Engineers have decided to use windowing and transformation in Google Cloud Dataflow for this purpose. However, when testing this feature, they find that the Cloud Dataflow job fails for the all streaming insert. What is the most likely cause of this problem?",
        "options": {
            "A": "They have not assigned the timestamp, which causes the job to fail",
            "B": "They have not set the triggers to accommodate the data coming in late, which causes the job to fail",
            "C": "They have not applied a global windowing function, which causes the job to fail when the pipeline is created",
            "D": "They have not applied a non-global windowing function, which causes the job to fail when the pipeline is created"
        },
        "answer": "D",
        "reason": "Correct answer is D. C does not make sense because for unbounded source like Pub/Sub, the global functions are applied by default. The reason for failure would be they are using specific aggregations that require non-global window functions, e.g. tumbling or hopping windows."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "58",
        "question": "You architect a system to analyze seismic data. Your extract, transform, and load (ETL) process runs as a series of MapReduce jobs on an Apache Hadoop cluster. The ETL process takes days to process a data set because some steps are computationally expensive. Then you discover that a sensor calibration step has been omitted. How should you change your ETL process to carry out sensor calibration systematically in the future?",
        "options": {
            "A": "Modify the transformMapReduce jobs to apply sensor calibration before they do anything else.",
            "B": "Introduce a new MapReduce job to apply sensor calibration to raw data, and ensure all other MapReduce jobs are chained after this.",
            "C": "Add sensor calibration data to the output of the ETL process, and document that all users need to apply sensor calibration themselves.",
            "D": "Develop an algorithm through simulation to predict variance of data output from the last MapReduce job based on calibration factors, and apply the correction to all data."
        },
        "answer": "B",
        "reason": "Two reasons, it is a cleaner approach with single job to handle the calibration before the data is used in the pipeline. Second, doing this step in later stages can be complex and maintenance of those jobs in the future will become challenging."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "59",
        "question": "An online retailer has built their current application on Google App Engine. A new initiative at the company mandates that they extend their application to allow their customers to transact directly via the application. They need to manage their shopping transactions and analyze combined data from multiple datasets using a business intelligence (BI) tool. They want to use only a single database for this purpose. Which Google Cloud database should they choose?",
        "options": {
            "A": "BigQuery",
            "B": "Cloud SQL",
            "C": "Cloud BigTable",
            "D": "Cloud Datastore"
        },
        "answer": "B",
        "reason": "Cloud SQL would be the most appropriate choice for the online retailer in this scenario. Cloud SQL is a fully-managed relational database service that allows for easy management and analysis of data using SQL. It is well-suited for applications built on Google App Engine and can handle the transactional workload of an e-commerce application, as well as the analytical workload of a BI tool."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "60",
        "question": "You launched a new gaming app almost three years ago. You have been uploading log files from the previous day to a separate Google BigQuery table with the table name format LOGS_yyyymmdd. You have been using table wildcard functions to generate daily and monthly reports for all time ranges. Recently, you discovered that some queries that cover long date ranges are exceeding the limit of 1,000 tables and failing. How can you resolve this issue?",
        "options": {
            "A": "Convert all daily log tables into date-partitioned tables",
            "B": "Convert the sharded tables into a single partitioned table",
            "C": "Enable query caching so you can cache data from previous months",
            "D": "Create separate views to cover each month, and query from these views"
        },
        "answer": "B",
        "reason": "Partitioning is recommended over table sharding, because partitioned tables perform better. With sharded tables, BigQuery must maintain a copy of the schema and metadata for each table. BigQuery might also need to verify permissions for each queried table. This practice also adds to query overhead and affects query performance."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "61",
        "question": "Your analytics team wants to build a simple statistical model to determine which customers are most likely to work with your company again, based on a few different metrics. They want to run the model on Apache Spark, using data housed in Google Cloud Storage, and you have recommended using Google Cloud Dataproc to execute this job. Testing has shown that this workload can run in approximately 30 minutes on a 15-node cluster, outputting the results into Google BigQuery. The plan is to run this workload weekly. How should you optimize the cluster for cost?",
        "options": {
            "A": "Migrate the workload to Google Cloud Dataflow",
            "B": "Use pre-emptible virtual machines (VMs) for the cluster",
            "C": "Use a higher-memory node so that the job runs faster",
            "D": "Use SSDs on the worker nodes so that the job can run faster"
        },
        "answer": "B",
        "reason": "Preemptible workers are the default secondary worker type. They are reclaimed and removed from the cluster if they are required by Google Cloud for other tasks. Although the potential removal of preemptible workers can affect job stability, you may decide to use preemptible instances to lower per-hour compute costs for non-critical data processing or to create very large clusters at a lower total cost."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "62",
        "question": "Your company receives both batch- and stream-based event data. You want to process the data using Google Cloud Dataflow over a predictable time period. However, you realize that in some instances data can arrive late or out of order. How should you design your Cloud Dataflow pipeline to handle data that is late or out of order?",
        "options": {
            "A": "Set a single global window to capture all the data.",
            "B": "Set sliding windows to capture all the lagged data.",
            "C": "Use watermarks and timestamps to capture the lagged data.",
            "D": "Ensure every datasource type (stream or batch) has a timestamp, and use the timestamps to define the logic for lagged data."
        },
        "answer": "C",
        "reason": "A watermark is a threshold that indicates when Dataflow expects all of the data in a window to have arrived. If new data arrives with a timestamp that's in the window but older than the watermark, the data is considered late data."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "63",
        "question": "You have some data, which is shown in the graphic below. The two dimensions are X and Y, and the shade of each dot represents what class it is. You want to classify this data accurately using a linear algorithm. To do this you need to add a synthetic feature. What should the value of that feature be?",
        "options": {
            "A": "X2+Y2",
            "B": "X2",
            "C": "Y2",
            "D": "cos(X)"
        },
        "answer": "A",
        "reason": "For fitting a linear classifier when the data is in a circle use A."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "64",
        "question": "You are integrating one of your internal IT applications and Google BigQuery, so users can query BigQuery from the application's interface. You do not want individual users to authenticate to BigQuery and you do not want to give them access to the dataset. You need to securely access BigQuery from your IT application. What should you do?",
        "options": {
            "A": "Create groups for your users and give those groups access to the dataset",
            "B": "Integrate with a single sign-on (SSO) platform, and pass each user's credentials along with the query request",
            "C": "Create a service account and grant dataset access to that account. Use the service account's private key to access the dataset",
            "D": "Create a dummy user and grant dataset access to that user. Store the username and password for that user in a file on the files system, and use those credentials to access the BigQuery dataset"
        },
        "answer": "C",
        "reason": "Creating a service account and granting dataset access to that account is the most secure way to access BigQuery from an IT application. Service accounts are designed for use in automated systems and do not require user interaction, eliminating the need for individual users to authenticate to BigQuery. Additionally, by using the private key of the service account to access the dataset, you can ensure that the authentication process is secure and that only authorized users have access to the data."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "65",
        "question": "You are building a data pipeline on Google Cloud. You need to prepare data using a casual method for a machine-learning process. You want to support a logistic regression model. You also need to monitor and adjust for null values, which must remain real-valued and cannot be removed. What should you do?",
        "options": {
            "A": "Use Cloud Dataprep to find null values in sample source data. Convert all nulls to 'none' using a Cloud Dataproc job.",
            "B": "Use Cloud Dataprep to find null values in sample source data. Convert all nulls to 0 using a Cloud Dataprep job.",
            "C": "Use Cloud Dataflow to find null values in sample source data. Convert all nulls to 'none' using a Cloud Dataprep job.",
            "D": "Use Cloud Dataflow to find null values in sample source data. Convert all nulls to 0 using a custom script."
        },
        "answer": "B",
        "reason": "Real-valued can not be null N/A or empty, have to be “0”, so it has to be B. Dataprep suites this, so none of dataflow options qualify as answer."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "66",
        "question": "You set up a streaming data insert into a Redis cluster via a Kafka cluster. Both clusters are running on Compute Engine instances. You need to encrypt data at rest with encryption keys that you can create, rotate, and destroy as needed. What should you do?",
        "options": {
            "A": "Create a dedicated service account, and use encryption at rest to reference your data stored in your Compute Engine cluster instances as part of your API service calls.",
            "B": "Create encryption keys in Cloud Key Management Service. Use those keys to encrypt your data in all of the Compute Engine cluster instances.",
            "C": "Create encryption keys locally. Upload your encryption keys to Cloud Key Management Service. Use those keys to encrypt your data in all of the Compute Engine cluster instances.",
            "D": "Create encryption keys in Cloud Key Management Service. Reference those keys in your API service calls when accessing the data in your Compute Engine cluster instances."
        },
        "answer": "B",
        "reason": "Google Cloud Key Management Service (KMS) provides a centralized cloud service for managing cryptographic keys. By creating encryption keys in Cloud KMS, you can easily manage the lifecycle of these keys, including creation, rotation, and destruction."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "67",
        "question": "You are developing an application that uses a recommendation engine on Google Cloud. Your solution should display new videos to customers based on past views. Your solution needs to generate labels for the entities in videos that the customer has viewed. Your design must be able to provide very fast filtering suggestions based on data from other customer preferences on several TB of data. What should you do?",
        "options": {
            "A": "Build and train a complex classification model with Spark MLlib to generate labels and filter the results. Deploy the models using Cloud Dataproc. Call the model from your application.",
            "B": "Build and train a classification model with Spark MLlib to generate labels. Build and train a second classification model with Spark MLlib to filter results to match customer preferences. Deploy the models using Cloud Dataproc. Call the models from your application.",
            "C": "Build an application that calls the Cloud Video Intelligence API to generate labels. Store data in Cloud Bigtable, and filter the predicted labels to match the user's viewing history to generate preferences.",
            "D": "Build an application that calls the Cloud Video Intelligence API to generate labels. Store data in Cloud SQL, and join and filter the predicted labels to match the user's viewing history to generate preferences."
        },
        "answer": "C",
        "reason": " Rather than building a new model - it is better to use Google provide APIs, here - Google Video Intelligence.\nBetween SQL and Bigtable - Bigtable is the better option as Bigtable support row-key filtering. Joining the filters is not required."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "68",
        "question": "You are selecting services to write and transform JSON messages from Cloud Pub/Sub to BigQuery for a data pipeline on Google Cloud. You want to minimize service costs. You also want to monitor and accommodate input data volume that will vary in size with minimal manual intervention. What should you do?",
        "options": {
            "A": "Use Cloud Dataproc to run your transformations. Monitor CPU utilization for the cluster. Resize the number of worker nodes in your cluster via the command line.",
            "B": "Use Cloud Dataproc to run your transformations. Use the diagnose command to generate an operational output archive. Locate the bottleneck and adjust cluster resources.",
            "C": "Use Cloud Dataflow to run your transformations. Monitor the job system lag with Stackdriver. Use the default autoscaling setting for worker instances.",
            "D": "Use Cloud Dataflow to run your transformations. Monitor the total execution time for a sampling of jobs. Configure the job to use non-default Compute Engine machine types when needed."
        },
        "answer": "C",
        "reason": "Using Cloud Dataflow for transformations with monitoring via Stackdriver and leveraging its default autoscaling settings, is the best choice. Cloud Dataflow is purpose-built for this type of workload, providing seamless scalability and efficient processing capabilities for streaming data. Its autoscaling feature minimizes manual intervention and helps manage costs by dynamically adjusting resources based on the actual processing needs, which is crucial for handling fluctuating data volumes efficiently and cost-effectively."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "69",
        "question": "Your infrastructure includes a set of YouTube channels. You have been tasked with creating a process for sending the YouTube channel data to Google Cloud for analysis. You want to design a solution that allows your world-wide marketing teams to perform ANSI SQL and other types of analysis on up-to-date YouTube channels log data. How should you set up the log data transfer into Google Cloud?",
        "options": {
            "A": "Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Multi-Regional storage bucket as a final destination.",
            "B": "Use Storage Transfer Service to transfer the offsite backup files to a Cloud Storage Regional bucket as a final destination.",
            "C": "Use BigQuery Data Transfer Service to transfer the offsite backup files to a Cloud Storage Multi-Regional storage bucket as a final destination.",
            "D": "Use BigQuery Data Transfer Service to transfer the offsite backup files to a Cloud Storage Regional storage bucket as a final destination."
        },
        "answer": "A",
        "reason": "Destination is GCS and having multi-regional so A is the best option available. Even since BigQuery Data Transfer Service initially supports Google application sources like Google Ads, Campaign Manager, Google Ad Manager and YouTube but it does not support destination anything other than bq data set."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "70",
        "question": "You are designing storage for very large text files for a data pipeline on Google Cloud. You want to support ANSI SQL queries. You also want to support compression and parallel load from the input locations using Google recommended practices. What should you do?",
        "options": {
            "A": "Transform text files to compressed Avro using Cloud Dataflow. Use BigQuery for storage and query.",
            "B": "Transform text files to compressed Avro using Cloud Dataflow. Use Cloud Storage and BigQuery permanent linked tables for query.",
            "C": "Compress text files to gzip using the Grid Computing Tools. Use BigQuery for storage and query.",
            "D": "Compress text files to gzip using the Grid Computing Tools. Use Cloud Storage, and then import into Cloud Bigtable for query."
        },
        "answer": "B",
        "reason": "The question is focused on designing storage for very large files, with support for compression, ANSI SQL queries, and parallel loading from the input locations. This can be met using GCS for storage and Bigquery permanent tables with external data source in GCS."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "71",
        "question": "You are developing an application on Google Cloud that will automatically generate subject labels for users' blog posts. You are under competitive pressure to add this feature quickly, and you have no additional developer resources. No one on your team has experience with machine learning. What should you do?",
        "options": {
            "A": "Call the Cloud Natural Language API from your application. Process the generated Entity Analysis as labels.",
            "B": "Call the Cloud Natural Language API from your application. Process the generated Sentiment Analysis as labels.",
            "C": "Build and train a text classification model using TensorFlow. Deploy the model using Cloud Machine Learning Engine. Call the model from your application and process the results as labels.",
            "D": "Build and train a text classification model using TensorFlow. Deploy the model using a Kubernetes Engine cluster. Call the model from your application and process the results as labels."
        },
        "answer": "A",
        "reason": "Entity analysis inspects the given text for known entities (Proper nouns such as public figures, landmarks, and so on. Common nouns such as restaurant, stadium, and so on.) and returns information about those entities. Entity analysis is performed with the analyzeEntities method."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "72",
        "question": "You are designing storage for 20 TB of text files as part of deploying a data pipeline on Google Cloud. Your input data is in CSV format. You want to minimize the cost of querying aggregate values for multiple users who will query the data in Cloud Storage with multiple engines. Which storage service and schema design should you use?",
        "options": {
            "A": "Use Cloud Bigtable for storage. Install the HBase shell on a Compute Engine instance to query the Cloud Bigtable data.",
            "B": "Use Cloud Bigtable for storage. Link as permanent tables in BigQuery for query.",
            "C": "Use Cloud Storage for storage. Link as permanent tables in BigQuery for query.",
            "D": "Use Cloud Storage for storage. Link as temporary tables in BigQuery for query."
        },
        "answer": "C",
        "reason": "BigQuery can access data in external sources, known as federated sources. Instead of first loading data into BigQuery, you can create a reference to an external source. External sources can be Cloud Bigtable, Cloud Storage, and Google Drive."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "73",
        "question": "You are designing storage for two relational tables that are part of a 10-TB database on Google Cloud. You want to support transactions that scale horizontally. You also want to optimize data for range queries on non-key columns. What should you do?",
        "options": {
            "A": "Use Cloud SQL for storage. Add secondary indexes to support query patterns.",
            "B": "Use Cloud SQL for storage. Use Cloud Dataflow to transform data to support query patterns.",
            "C": "Use Cloud Spanner for storage. Add secondary indexes to support query patterns.",
            "D": "Use Cloud Spanner for storage. Use Cloud Dataflow to transform data to support query patterns."
        },
        "answer": "C",
        "reason": "Spanner allows transaction tables to scale horizontally and secondary indexes for range queries."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "74",
        "question": "Your financial services company is moving to cloud technology and wants to store 50 TB of financial time-series data in the cloud. This data is updated frequently and new data will be streaming in all the time. Your company also wants to move their existing Apache Hadoop jobs to the cloud to get insights into this data. Which product should they use to store the data?",
        "options": {
            "A": "Cloud Bigtable",
            "B": "Google BigQuery",
            "C": "Google Cloud Storage",
            "D": "Google Cloud Datastore"
        },
        "answer": "A",
        "reason": "Bigtable is Google's NoSQL Big Data database service. It's the same database that powers many core Google services, including Search, Analytics, Maps, and Gmail. Bigtable is designed to handle massive workloads at consistent low latency and high throughput, so it's a great choice for both operational and analytical applications, including IoT, user analytics, and financial data analysis.\nBigtable is an excellent option for any Apache Spark or Hadoop uses that require Apache HBase. Bigtable supports the Apache HBase 1.0+ APIs and offers a Bigtable HBase client in Maven, so it is easy to use Bigtable with Dataproc."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "75",
        "question": "An organization maintains a Google BigQuery dataset that contains tables with user-level data. They want to expose aggregates of this data to other Google Cloud projects, while still controlling access to the user-level data. Additionally, they need to minimize their overall storage cost and ensure the analysis cost for other projects is assigned to those projects. What should they do?",
        "options": {
            "A": "Create and share an authorized view that provides the aggregate results.",
            "B": "Create and share a new dataset and view that provides the aggregate results.",
            "C": "Create and share a new dataset and table that contains the aggregate results.",
            "D": "Create dataViewer Identity and Access Management (IAM) roles on the dataset to enable sharing."
        },
        "answer": "A",
        "reason": "An authorized view is a BigQuery feature that allows you to share only a specific subset of data from a table, while still keeping the original data private. This way, the organization can expose only the aggregate data to other projects, while still controlling access to the user-level data. By using an authorized view, the organization can minimize their overall storage cost as the aggregate data takes up less storage space than the original data. Additionally, by using authorized view, the analysis cost for other projects is assigned to those projects."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "76",
        "question": "Government regulations in your industry mandate that you have to maintain an auditable record of access to certain types of data. Assuming that all expiring logs will be archived correctly, where should you store data that is subject to that mandate?",
        "options": {
            "A": "Encrypted on Cloud Storage with user-supplied encryption keys. A separate decryption key will be given to each authorized user.",
            "B": "In a BigQuery dataset that is viewable only by authorized personnel, with the Data Access log used to provide the auditability.",
            "C": "In Cloud SQL, with separate database user names to each user. The Cloud SQL Admin activity logs will be used to provide the auditability.",
            "D": "In a bucket on Cloud Storage that is accessible only by an AppEngine service that collects user information and logs the access before providing a link to the bucket."
        },
        "answer": "B",
        "reason": "Bigquery is used to analyse access logs, data access logs capture the details of the user that accessed the data"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "77",
        "question": "Your neural network model is taking days to train. You want to increase the training speed. What can you do?",
        "options": {
            "A": "Subsample your test dataset.",
            "B": "Subsample your training dataset.",
            "C": "Increase the number of input features to your model.",
            "D": "Increase the number of layers in your neural network."
        },
        "answer": "B",
        "reason": "Subsampling your training dataset can help increase the training speed of your neural network model. By reducing the size of your training dataset, you can speed up the process of updating the weights in your neural network. This can help you quickly test and iterate your model to improve its accuracy."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "78",
        "question": "You are responsible for writing your company's ETL pipelines to run on an Apache Hadoop cluster. The pipeline will require some checkpointing and splitting pipelines. Which method should you use to write the pipelines?",
        "options": {
            "A": "PigLatin using Pig",
            "B": "HiveQL using Hive",
            "C": "Java using MapReduce",
            "D": "Python using MapReduce"
        },
        "answer": "A",
        "reason": "Pig is scripting language which can be used for checkpointing and splitting pipelines"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "79",
        "question": "Your company maintains a hybrid deployment with GCP, where analytics are performed on your anonymized customer data. The data are imported to Cloud Storage from your data center through parallel uploads to a data transfer server running on GCP. Management informs you that the daily transfers take too long and have asked you to fix the problem. You want to maximize transfer speeds. Which action should you take?",
        "options": {
            "A": "Increase the CPU size on your server.",
            "B": "Increase the size of the Google Persistent Disk on your server.",
            "C": "Increase your network bandwidth from your datacenter to GCP.",
            "D": "Increase your network bandwidth from Compute Engine to Cloud Storage."
        },
        "answer": "C",
        "reason": "Speed of data transfer depends on Bandwidth."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "80",
        "question": "MJTelco Case Study -\nCompany Overview -\nMJTelco is a startup that plans to build networks in rapidly growing, underserved markets around the world. The company has patents for innovative optical communications hardware. Based on these patents, they can create many reliable, high-speed backbone links with inexpensive hardware.\nCompany Background -\nFounded by experienced telecom executives, MJTelco uses technologies originally developed to overcome communications challenges in space. Fundamental to their operation, they need to create a distributed data infrastructure that drives real-time analysis and incorporates machine learning to continuously optimize their topologies. Because their hardware is inexpensive, they plan to overdeploy the network allowing them to account for the impact of dynamic regional politics on location availability and cost.\nTheir management and operations teams are situated all around the globe creating many-to-many relationship between data consumers and provides in their system. After careful consideration, they decided public cloud is the perfect environment to support their needs.\nSolution Concept -\nMJTelco is running a successful proof-of-concept (PoC) project in its labs. They have two primary needs:\n\u2711 Scale and harden their PoC to support significantly more data flows generated when they ramp to more than 50,000 installations.\n\u2711 Refine their machine-learning cycles to verify and improve the dynamic models they use to control topology definition.\nMJTelco will also use three separate operating environments `\" development/test, staging, and production `\" to meet the needs of running experiments, deploying new features, and serving production customers.\nBusiness Requirements -\n\u2711 Scale up their production environment with minimal cost, instantiating resources when and where needed in an unpredictable, distributed telecom user community.\n\u2711 Ensure security of their proprietary data to protect their leading-edge machine learning and analysis.\n\u2711 Provide reliable and timely access to data for analysis from distributed research workers\n\u2711 Maintain isolated environments that support rapid iteration of their machine-learning models without affecting their customers.\nTechnical Requirements -\nEnsure secure and efficient transport and storage of telemetry data\nRapidly scale instances to support between 10,000 and 100,000 data providers with multiple flows each.\nAllow analysis and presentation against data tables tracking up to 2 years of data storing approximately 100m records/day\nSupport rapid iteration of monitoring infrastructure focused on awareness of data pipeline problems both in telemetry flows and in production learning cycles.\nCEO Statement -\nOur business model relies on our patents, analytics and dynamic machine learning. Our inexpensive hardware is organized to be highly reliable, which gives us cost advantages. We need to quickly stabilize our large distributed data pipelines to meet our reliability and capacity commitments.\nCTO Statement -\nOur public cloud services must operate as advertised. We need resources that scale and keep our data secure. We also need environments in which our data scientists can carefully study and quickly adapt our models. Because we rely on automation to process our data, we also need our development and test environments to work as we iterate.\nCFO Statement -\nThe project is too large for us to maintain the hardware and software required for the data and analysis. Also, we cannot afford to staff an operations team to monitor so many data feeds, so we will rely on automation and infrastructure. Google Cloud's machine learning will allow our quantitative researchers to work on our high-value problems instead of problems with our data pipelines.\nMJTelco is building a custom interface to share data. They have these requirements:\n1. They need to do aggregations over their petabyte-scale datasets.\n2. They need to scan specific time range rows with a very fast response time (milliseconds).\nWhich combination of Google Cloud Platform products should you recommend?",
        "options": {
            "A": "Cloud Datastore and Cloud Bigtable",
            "B": "Cloud Bigtable and Cloud SQL",
            "C": "BigQuery and Cloud Bigtable",
            "D": "BigQuery and Cloud Storage"
        },
        "answer": "C",
        "reason": "They need to do aggregations over their petabyte-scale datasets: Bigquery.\nThey need to scan specific time range rows with a very fast response time (milliseconds): Bigtable."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "81",
        "question": "MJTelco Case Study -\nCompany Overview -\nMJTelco is a startup that plans to build networks in rapidly growing, underserved markets around the world. The company has patents for innovative optical communications hardware. Based on these patents, they can create many reliable, high-speed backbone links with inexpensive hardware.\nCompany Background -\nFounded by experienced telecom executives, MJTelco uses technologies originally developed to overcome communications challenges in space. Fundamental to their operation, they need to create a distributed data infrastructure that drives real-time analysis and incorporates machine learning to continuously optimize their topologies. Because their hardware is inexpensive, they plan to overdeploy the network allowing them to account for the impact of dynamic regional politics on location availability and cost.\nTheir management and operations teams are situated all around the globe creating many-to-many relationship between data consumers and provides in their system. After careful consideration, they decided public cloud is the perfect environment to support their needs.\nSolution Concept -\nMJTelco is running a successful proof-of-concept (PoC) project in its labs. They have two primary needs:\n\u2711 Scale and harden their PoC to support significantly more data flows generated when they ramp to more than 50,000 installations.\nRefine their machine-learning cycles to verify and improve the dynamic models they use to control topology definition.\nMJTelco will also use three separate operating environments `\" development/test, staging, and production `\" to meet the needs of running experiments, deploying new features, and serving production customers.\nBusiness Requirements -\n\u2711 Scale up their production environment with minimal cost, instantiating resources when and where needed in an unpredictable, distributed telecom user community.\n\u2711 Ensure security of their proprietary data to protect their leading-edge machine learning and analysis.\n\u2711 Provide reliable and timely access to data for analysis from distributed research workers\n\u2711 Maintain isolated environments that support rapid iteration of their machine-learning models without affecting their customers.\nTechnical Requirements -\nEnsure secure and efficient transport and storage of telemetry data\nRapidly scale instances to support between 10,000 and 100,000 data providers with multiple flows each.\nAllow analysis and presentation against data tables tracking up to 2 years of data storing approximately 100m records/day\nSupport rapid iteration of monitoring infrastructure focused on awareness of data pipeline problems both in telemetry flows and in production learning cycles.\nCEO Statement -\nOur business model relies on our patents, analytics and dynamic machine learning. Our inexpensive hardware is organized to be highly reliable, which gives us cost advantages. We need to quickly stabilize our large distributed data pipelines to meet our reliability and capacity commitments.\nCTO Statement -\nOur public cloud services must operate as advertised. We need resources that scale and keep our data secure. We also need environments in which our data scientists can carefully study and quickly adapt our models. Because we rely on automation to process our data, we also need our development and test environments to work as we iterate.\nCFO Statement -\nThe project is too large for us to maintain the hardware and software required for the data and analysis. Also, we cannot afford to staff an operations team to monitor so many data feeds, so we will rely on automation and infrastructure. Google Cloud's machine learning will allow our quantitative researchers to work on our high-value problems instead of problems with our data pipelines.\nYou need to compose visualization for operations teams with the following requirements:\n\u2711 Telemetry must include data from all 50,000 installations for the most recent 6 weeks (sampling once every minute)\n\u2711 The report must not be more than 3 hours delayed from live data.\n\u2711 The actionable report should only show suboptimal links.\n\u2711 Most suboptimal links should be sorted to the top.\nSuboptimal links can be grouped and filtered by regional geography.\n\u2711 User response time to load the report must be <5 seconds.\nYou create a data source to store the last 6 weeks of data, and create visualizations that allow viewers to see multiple date ranges, distinct geographic regions, and unique installation types. You always show the latest data without any changes to your visualizations. You want to avoid creating and updating new visualizations each month. What should you do?",
        "options": {
            "A": "Look through the current data and compose a series of charts and tables, one for each possible combination of criteria.",
            "B": "Look through the current data and compose a small set of generalized charts and tables bound to criteria filters that allow value selection.",
            "C": "Export the data to a spreadsheet, compose a series of charts and tables, one for each possible combination of criteria, and spread them across multiple tabs.",
            "D": "Load the data into relational database tables, write a Google App Engine application that queries all rows, summarizes the data across each criteria, and then renders results using the Google Charts and visualization API."
        },
        "answer": "D",
        "reason": "Data in SQL so querying becomes easier on any pattern. create mutiple charts, graphs to fulfill your requirements."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "82",
        "question": "MJTelco Case Study -\nCompany Overview -\nMJTelco is a startup that plans to build networks in rapidly growing, underserved markets around the world. The company has patents for innovative optical communications hardware. Based on these patents, they can create many reliable, high-speed backbone links with inexpensive hardware.\nCompany Background -\nFounded by experienced telecom executives, MJTelco uses technologies originally developed to overcome communications challenges in space. Fundamental to their operation, they need to create a distributed data infrastructure that drives real-time analysis and incorporates machine learning to continuously optimize their topologies. Because their hardware is inexpensive, they plan to overdeploy the network allowing them to account for the impact of dynamic regional politics on location availability and cost.\nTheir management and operations teams are situated all around the globe creating many-to-many relationship between data consumers and provides in their system. After careful consideration, they decided public cloud is the perfect environment to support their needs.\nSolution Concept -\nMJTelco is running a successful proof-of-concept (PoC) project in its labs. They have two primary needs:\n\u2711 Scale and harden their PoC to support significantly more data flows generated when they ramp to more than 50,000 installations.\n\u2711 Refine their machine-learning cycles to verify and improve the dynamic models they use to control topology definition.\nMJTelco will also use three separate operating environments `\" development/test, staging, and production `\" to meet the needs of running experiments, deploying new features, and serving production customers.\nBusiness Requirements -\n\u2711 Scale up their production environment with minimal cost, instantiating resources when and where needed in an unpredictable, distributed telecom user community.\n\u2711 Ensure security of their proprietary data to protect their leading-edge machine learning and analysis.\n\u2711 Provide reliable and timely access to data for analysis from distributed research workers\n\u2711 Maintain isolated environments that support rapid iteration of their machine-learning models without affecting their customers.\nTechnical Requirements -\nEnsure secure and efficient transport and storage of telemetry data\nRapidly scale instances to support between 10,000 and 100,000 data providers with multiple flows each.\nAllow analysis and presentation against data tables tracking up to 2 years of data storing approximately 100m records/day\nSupport rapid iteration of monitoring infrastructure focused on awareness of data pipeline problems both in telemetry flows and in production learning cycles.\nCEO Statement -\nOur business model relies on our patents, analytics and dynamic machine learning. Our inexpensive hardware is organized to be highly reliable, which gives us cost advantages. We need to quickly stabilize our large distributed data pipelines to meet our reliability and capacity commitments.\nCTO Statement -\nOur public cloud services must operate as advertised. We need resources that scale and keep our data secure. We also need environments in which our data scientists can carefully study and quickly adapt our models. Because we rely on automation to process our data, we also need our development and test environments to work as we iterate.\nCFO Statement -\nThe project is too large for us to maintain the hardware and software required for the data and analysis. Also, we cannot afford to staff an operations team to monitor so many data feeds, so we will rely on automation and infrastructure. Google Cloud's machine learning will allow our quantitative researchers to work on our high-value problems instead of problems with our data pipelines.\nGiven the record streams MJTelco is interested in ingesting per day, they are concerned about the cost of Google BigQuery increasing. MJTelco asks you to provide a design solution. They require a single large data table called tracking_table. Additionally, they want to minimize the cost of daily queries while performing fine-grained analysis of each day's events. They also want to use streaming ingestion. What should you do?",
        "options": {
            "A": "Create a table called tracking_table and include a DATE column.",
            "B": "Create a partitioned table called tracking_table and include a TIMESTAMP column.",
            "C": "Create sharded tables for each day following the pattern tracking_table_YYYYMMDD.",
            "D": "Create a table called tracking_table with a TIMESTAMP column to represent the day."
        },
        "answer": "B",
        "reason": "Partition tables in BQ have different cost. If a partition is not modified (DML) for 90 days then cost will be less by 50%, while querying will be efficient since its single large table."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "83",
        "question": "Flowlogistic Case Study -\nCompany Overview -\nFlowlogistic is a leading logistics and supply chain provider. They help businesses throughout the world manage their resources and transport them to their final destination. The company has grown rapidly, expanding their offerings to include rail, truck, aircraft, and oceanic shipping.\nCompany Background -\nThe company started as a regional trucking company, and then expanded into other logistics market. Because they have not updated their infrastructure, managing and tracking orders and shipments has become a bottleneck. To improve operations, Flowlogistic developed proprietary technology for tracking shipments in real time at the parcel level. However, they are unable to deploy it because their technology stack, based on Apache Kafka, cannot support the processing volume. In addition, Flowlogistic wants to further analyze their orders and shipments to determine how best to deploy their resources.\nSolution Concept -\nFlowlogistic wants to implement two concepts using the cloud:\n\u2711 Use their proprietary technology in a real-time inventory-tracking system that indicates the location of their loads\n\u2711 Perform analytics on all their orders and shipment logs, which contain both structured and unstructured data, to determine how best to deploy resources, which markets to expand info. They also want to use predictive analytics to learn earlier when a shipment will be delayed.\nExisting Technical Environment -\nFlowlogistic architecture resides in a single data center:\n\u2711 Databases\n- 8 physical servers in 2 clusters\n- SQL Server `\" user data, inventory, static data\n- 3 physical servers\n- Cassandra `\" metadata, tracking messages\n10 Kafka servers `\" tracking message aggregation and batch insert\n\u2711 Application servers `\" customer front end, middleware for order/customs\n- 60 virtual machines across 20 physical servers\n- Tomcat `\" Java services\n- Nginx `\" static content\n- Batch servers\n\u2711 Storage appliances\n- iSCSI for virtual machine (VM) hosts\n- Fibre Channel storage area network (FC SAN) `\" SQL server storage\nNetwork-attached storage (NAS) image storage, logs, backups\n\u2711 10 Apache Hadoop /Spark servers\n- Core Data Lake\n- Data analysis workloads\n\u2711 20 miscellaneous servers\n- Jenkins, monitoring, bastion hosts,\nBusiness Requirements -\n\u2711 Build a reliable and reproducible environment with scaled panty of production.\n\u2711 Aggregate data in a centralized Data Lake for analysis\n\u2711 Use historical data to perform predictive analytics on future shipments\n\u2711 Accurately track every shipment worldwide using proprietary technology\n\u2711 Improve business agility and speed of innovation through rapid provisioning of new resources\n\u2711 Analyze and optimize architecture for performance in the cloud\n\u2711 Migrate fully to the cloud if all other requirements are met\nTechnical Requirements -\n\u2711 Handle both streaming and batch data\n\u2711 Migrate existing Hadoop workloads\n\u2711 Ensure architecture is scalable and elastic to meet the changing demands of the company.\n\u2711 Use managed services whenever possible\n\u2711 Encrypt data flight and at rest\nConnect a VPN between the production data center and cloud environment\nSEO Statement -\nWe have grown so quickly that our inability to upgrade our infrastructure is really hampering further growth and efficiency. We are efficient at moving shipments around the world, but we are inefficient at moving data around.\nWe need to organize our information so we can more easily understand where our customers are and what they are shipping.\nCTO Statement -\nIT has never been a priority for us, so as our data has grown, we have not invested enough in our technology. I have a good staff to manage IT, but they are so busy managing our infrastructure that I cannot get them to do the things that really matter, such as organizing our data, building the analytics, and figuring out how to implement the CFO' s tracking technology.\nCFO Statement -\nPart of our competitive advantage is that we penalize ourselves for late shipments and deliveries. Knowing where out shipments are at all times has a direct correlation to our bottom line and profitability. Additionally, I don't want to commit capital to building out a server environment.\nFlowlogistic's management has determined that the current Apache Kafka servers cannot handle the data volume for their real-time inventory tracking system.\nYou need to build a new system on Google Cloud Platform (GCP) that will feed the proprietary tracking software. The system must be able to ingest data from a variety of global sources, process and query in real-time, and store the data reliably. Which combination of GCP products should you choose?",
        "options": {
            "A": "Cloud Pub/Sub, Cloud Dataflow, and Cloud Storage",
            "B": "Cloud Pub/Sub, Cloud Dataflow, and Local SSD",
            "C": "Cloud Pub/Sub, Cloud SQL, and Cloud Storage",
            "D": "Cloud Load Balancing, Cloud Dataflow, and Cloud Storage",
            "E": "Cloud Dataflow, Cloud SQL, and Cloud Storage"
        },
        "answer": "A",
        "reason": "PubSub (for global ingestion from multiple sources) + Dataflow (for process and query) + reliable (gcs)."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "84",
        "question": "After migrating ETL jobs to run on BigQuery, you need to verify that the output of the migrated jobs is the same as the output of the original. You've loaded a table containing the output of the original job and want to compare the contents with output from the migrated job to show that they are identical. The tables do not contain a primary key column that would enable you to join them together for comparison. What should you do?",
        "options": {
            "A": "Select random samples from the tables using the RAND() function and compare the samples.",
            "B": "Select random samples from the tables using the HASH() function and compare the samples.",
            "C": "Use a Dataproc cluster and the BigQuery Hadoop connector to read the data from each table and calculate a hash from non-timestamp columns of the table after sorting. Compare the hashes of each table.",
            "D": "Create stratified random samples using the OVER() function and compare equivalent samples from each table."
        },
        "answer": "C",
        "reason": "Use a Dataproc cluster and the BigQuery Hadoop connector to read the data from each table and calculate a hash from non-timestamp columns of the table after sorting. Compare the hashes of each table. This approach will ensure that the data is read in a consistent order, and the hash function will provide a quick and efficient way to compare the contents of the tables and ensure that they are identical."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "85",
        "question": "You are a head of BI at a large enterprise company with multiple business units that each have different priorities and budgets. You use on-demand pricing for BigQuery with a quota of 2K concurrent on-demand slots per project. Users at your organization sometimes don't get slots to execute their query and you need to correct this. You'd like to avoid introducing new projects to your account. What should you do?",
        "options": {
            "A": "Convert your batch BQ queries into interactive BQ queries.",
            "B": "Create an additional project to overcome the 2K on-demand per-project quota.",
            "C": "Switch to flat-rate pricing and establish a hierarchical priority model for your projects.",
            "D": "Increase the amount of concurrent slots per project at the Quotas page at the Cloud Console."
        },
        "answer": "C",
        "reason": "Switching to flat-rate pricing would allow you to ensure a consistent level of service and avoid running into the on-demand slot quota per project. Additionally, by establishing a hierarchical priority model for your projects, you could allocate resources based on the specific needs and priorities of each business unit, ensuring that the most critical queries are executed first. This approach would allow you to balance the needs of each business unit while maximizing the use of your BigQuery resources."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "86",
        "question": "You have an Apache Kafka cluster on-prem with topics containing web application logs. You need to replicate the data to Google Cloud for analysis in BigQuery and Cloud Storage. The preferred replication method is mirroring to avoid deployment of Kafka Connect plugins. What should you do?",
        "options": {
            "A": "Deploy a Kafka cluster on GCE VM Instances. Configure your on-prem cluster to mirror your topics to the cluster running in GCE. Use a Dataproc cluster or Dataflow job to read from Kafka and write to GCS.",
            "B": "Deploy a Kafka cluster on GCE VM Instances with the Pub/Sub Kafka connector configured as a Sink connector. Use a Dataproc cluster or Dataflow job to read from Kafka and write to GCS.",
            "C": "Deploy the Pub/Sub Kafka connector to your on-prem Kafka cluster and configure Pub/Sub as a Source connector. Use a Dataflow job to read from Pub/Sub and write to GCS.",
            "D": "Deploy the Pub/Sub Kafka connector to your on-prem Kafka cluster and configure Pub/Sub as a Sink connector. Use a Dataflow job to read from Pub/Sub and write to GCS."
        },
        "answer": "A",
        "reason": "This option involves setting up a separate Kafka cluster in Google Cloud, and then configuring the on-prem cluster to mirror the topics to this cluster. The data from the Google Cloud Kafka cluster can then be read using either a Dataproc cluster or a Dataflow job and written to Cloud Storage for analysis in BigQuery."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "87",
        "question": "You've migrated a Hadoop job from an on-prem cluster to dataproc and GCS. Your Spark job is a complicated analytical workload that consists of many shuffling operations and initial data are parquet files (on average 200-400 MB size each). You see some degradation in performance after the migration to Dataproc, so you'd like to optimize for it. You need to keep in mind that your organization is very cost-sensitive, so you'd like to continue using Dataproc on preemptibles (with 2 non-preemptible workers only) for this workload. What should you do?",
        "options": {
            "A": "Increase the size of your parquet files to ensure them to be 1 GB minimum.",
            "B": "Switch to TFRecords formats (appr. 200MB per file) instead of parquet files.",
            "C": "Switch from HDDs to SSDs, copy initial data from GCS to HDFS, run the Spark job and copy results back to GCS.",
            "D": "Switch from HDDs to SSDs, override the preemptible VMs configuration to increase the boot disk size."
        },
        "answer": "A",
        "reason": "Option A is feasible, which reduces the number of files leading better parallel processing."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "88",
        "question": "Your team is responsible for developing and maintaining ETLs in your company. One of your Dataflow jobs is failing because of some errors in the input data, and you need to improve reliability of the pipeline (incl. being able to reprocess all failing data).\nWhat should you do?",
        "options": {
            "A": "Add a filtering step to skip these types of errors in the future, extract erroneous rows from logs.",
            "B": "Add a try\u05d2\u20ac\u00a6 catch block to your DoFn that transforms the data, extract erroneous rows from logs.",
            "C": "Add a try\u05d2\u20ac\u00a6 catch block to your DoFn that transforms the data, write erroneous rows to Pub/Sub PubSub directly from the DoFn.",
            "D": "Add a try\u05d2\u20ac\u00a6 catch block to your DoFn that transforms the data, use a sideOutput to create a PCollection that can be stored to Pub/Sub later."
        },
        "answer": "D",
        "reason": "Use a try catch block to direct erroneous rows into a side output. The PCollection of the side output can be sent efficiently to the PubSub topic via Apache Beam PubSubIO."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "89",
        "question": "You're training a model to predict housing prices based on an available dataset with real estate properties. Your plan is to train a fully connected neural net, and you've discovered that the dataset contains latitude and longitude of the property. Real estate professionals have told you that the location of the property is highly influential on price, so you'd like to engineer a feature that incorporates this physical dependency. What should you do?",
        "options": {
            "A": "Provide latitude and longitude as input vectors to your neural net.",
            "B": "Create a numeric column from a feature cross of latitude and longitude.",
            "C": "Create a feature cross of latitude and longitude, bucketize it at the minute level and use L1 regularization during optimization.",
            "D": "Create a feature cross of latitude and longitude, bucketize it at the minute level and use L2 regularization during optimization."
        },
        "answer": "C",
        "reason": "L1 regularization becuase we know the feature is a strong feature. L2 will evenly distribute weights."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "90",
        "question": "You are deploying MariaDB SQL databases on GCE VM Instances and need to configure monitoring and alerting. You want to collect metrics including network connections, disk IO and replication status from MariaDB with minimal development effort and use StackDriver for dashboards and alerts. What should you do?",
        "options": {
            "A": "Install the OpenCensus Agent and create a custom metric collection application with a StackDriver exporter.",
            "B": "Place the MariaDB instances in an Instance Group with a Health Check.",
            "C": "Install the StackDriver Logging Agent and configure fluentd in_tail plugin to read MariaDB logs.",
            "D": "Install the StackDriver Agent and configure the MySQL plugin."
        },
        "answer": "D",
        "reason": "mariaDB is an extension of mysql and mysql plugin must work fine to extract the metrics of mariaDB."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "91",
        "question": "You work for a bank. You have a labelled dataset that contains information on already granted loan application and whether these applications have been defaulted. You have been asked to train a model to predict default rates for credit applicants. What should you do?",
        "options": {
            "A": "Increase the size of the dataset by collecting additional data.",
            "B": "Train a linear regression to predict a credit default risk score.",
            "C": "Remove the bias from the data and collect applications that have been declined loans.",
            "D": "Match loan applicants with their social profiles to enable feature engineering."
        },
        "answer": "B",
        "reason": "Default rates can be predicted with linear regression."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "92",
        "question": "You need to migrate a 2TB relational database to Google Cloud Platform. You do not have the resources to significantly refactor the application that uses this database and cost to operate is of primary concern. Which service do you select for storing and serving your data?",
        "options": {
            "A": "Cloud Spanner",
            "B": "Cloud Bigtable",
            "C": "Cloud Firestore",
            "D": "Cloud SQL"
        },
        "answer": "D",
        "reason": "Cloud SQl cheap and relational DB."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "93",
        "question": "You're using Bigtable for a real-time application, and you have a heavy load that is a mix of read and writes. You've recently identified an additional use case and need to perform hourly an analytical job to calculate certain statistics across the whole database. You need to ensure both the reliability of your production application as well as the analytical workload. What should you do?",
        "options": {
            "A": "Export Bigtable dump to GCS and run your analytical job on top of the exported files.",
            "B": "Add a second cluster to an existing instance with a multi-cluster routing, use live-traffic app profile for your regular workload and batch-analytics profile for the analytics workload.",
            "C": "Add a second cluster to an existing instance with a single-cluster routing, use live-traffic app profile for your regular workload and batch-analytics profile for the analytics workload.",
            "D": "Increase the size of your existing cluster twice and execute your analytics workload on your new resized cluster."
        },
        "answer": "C",
        "reason": "When you use a single cluster to run a batch analytics job that performs numerous large reads alongside an application that performs a mix of reads and writes, the large batch job can slow things down for the application's users. With replication, you can use app profiles with single-cluster routing to route batch analytics jobs and application traffic to different clusters, so that batch jobs don't affect your applications' users."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "94",
        "question": "You are designing an Apache Beam pipeline to enrich data from Cloud Pub/Sub with static reference data from BigQuery. The reference data is small enough to fit in memory on a single worker. The pipeline should write enriched results to BigQuery for analysis. Which job type and transforms should this pipeline use?",
        "options": {
            "A": "Batch job, PubSubIO, side-inputs",
            "B": "Streaming job, PubSubIO, JdbcIO, side-outputs",
            "C": "Streaming job, PubSubIO, BigQueryIO, side-inputs",
            "D": "Streaming job, PubSubIO, BigQueryIO, side-outputs"
        },
        "answer": "C",
        "reason": "In addition to the main input PCollection, you can provide additional inputs to a ParDo transform in the form of side inputs. A side input is an additional input that your DoFn can access each time it processes an element in the input PCollection. When you specify a side input, you create a view of some other data that can be read from within the ParDo transform’s DoFn while processing each element."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "95",
        "question": "You have a data pipeline that writes data to Cloud Bigtable using well-designed row keys. You want to monitor your pipeline to determine when to increase the size of your Cloud Bigtable cluster. Which two actions can you take to accomplish this? (Choose two.)",
        "options": {
            "A": "Review Key Visualizer metrics. Increase the size of the Cloud Bigtable cluster when the Read pressure index is above 100.",
            "B": "Review Key Visualizer metrics. Increase the size of the Cloud Bigtable cluster when the Write pressure index is above 100.",
            "C": "Monitor the latency of write operations. Increase the size of the Cloud Bigtable cluster when there is a sustained increase in write latency.",
            "D": "Monitor storage utilization. Increase the size of the Cloud Bigtable cluster when utilization increases above 70% of max capacity.",
            "E": "Monitor latency of read operations. Increase the size of the Cloud Bigtable cluster of read operations take longer than 100 ms."
        },
        "answer": "CD",
        "reason": "Adding more nodes to a cluster (not replication) can improve the write performance.\nsince Google recommends adding nodes when storage utilization is > 70%."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "96",
        "question": "You want to analyze hundreds of thousands of social media posts daily at the lowest cost and with the fewest steps.\nYou have the following requirements:\n\u2711 You will batch-load the posts once per day and run them through the Cloud Natural Language API.\n\u2711 You will extract topics and sentiment from the posts.\n\u2711 You must store the raw posts for archiving and reprocessing.\n\u2711 You will create dashboards to be shared with people both inside and outside your organization.\nYou need to store both the data extracted from the API to perform analysis as well as the raw social media posts for historical archiving. What should you do?",
        "options": {
            "A": "Store the social media posts and the data extracted from the API in BigQuery.",
            "B": "Store the social media posts and the data extracted from the API in Cloud SQL.",
            "C": "Store the raw social media posts in Cloud Storage, and write the data extracted from the API into BigQuery.",
            "D": "Feed to social media posts into the API directly from the source, and write the extracted data from the API into BigQuery."
        },
        "answer": "C",
        "reason": "You must store the raw posts for archiving and reprocessing, Store the raw social media posts in Cloud Storage."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "97",
        "question": "You store historic data in Cloud Storage. You need to perform analytics on the historic data. You want to use a solution to detect invalid data entries and perform data transformations that will not require programming or knowledge of SQL. What should you do?",
        "options": {
            "A": "Use Cloud Dataflow with Beam to detect errors and perform transformations.",
            "B": "Use Cloud Dataprep with recipes to detect errors and perform transformations.",
            "C": "Use Cloud Dataproc with a Hadoop job to detect errors and perform transformations.",
            "D": "Use federated tables in BigQuery with queries to detect errors and perform transformations."
        },
        "answer": "B",
        "reason": "Dataprep by Trifacta is an intelligent data service for visually exploring, cleaning, and preparing structured and unstructured data for analysis, reporting, and machine learning."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "98",
        "question": "Your company needs to upload their historic data to Cloud Storage. The security rules don't allow access from external IPs to their on-premises resources. After an initial upload, they will add new data from existing on-premises applications every day. What should they do?",
        "options": {
            "A": "Execute gsutil rsync from the on-premises servers.",
            "B": "Use Dataflow and write the data to Cloud Storage.",
            "C": "Write a job template in Dataproc to perform the data transfer.",
            "D": "Install an FTP server on a Compute Engine VM to receive the files and move them to Cloud Storage."
        },
        "answer": "A",
        "reason": "The gcloud storage command is the standard tool for small- to medium-sized transfers over a typical enterprise-scale network, from a private data center or from another cloud provider to Google Cloud."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "99",
        "question": "You have a query that filters a BigQuery table using a WHERE clause on timestamp and ID columns. By using bq query `\"-dry_run you learn that the query triggers a full scan of the table, even though the filter on timestamp and ID select a tiny fraction of the overall data. You want to reduce the amount of data scanned by BigQuery with minimal changes to existing SQL queries. What should you do?",
        "options": {
            "A": "Create a separate table for each ID.",
            "B": "Use the LIMIT keyword to reduce the number of rows returned.",
            "C": "Recreate the table with a partitioning column and clustering column.",
            "D": "Use the bq query --maximum_bytes_billed flag to restrict the number of bytes billed."
        },
        "answer": "C",
        "reason": "A partitioned table is a special table that is divided into segments, called partitions, that make it easier to manage and query your data. By dividing a large table into smaller partitions, you can improve query performance, and you can control costs by reducing the number of bytes read by a query.\nCustered tables in BigQuery are tables that have a user-defined column sort order using clustered columns. Clustered tables can improve query performance and reduce query costs."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "100",
        "question": "You have a requirement to insert minute-resolution data from 50,000 sensors into a BigQuery table. You expect significant growth in data volume and need the data to be available within 1 minute of ingestion for real-time analysis of aggregated trends. What should you do?",
        "options": {
            "A": "Use bq load to load a batch of sensor data every 60 seconds.",
            "B": "Use a Cloud Dataflow pipeline to stream data into the BigQuery table.",
            "C": "Use the INSERT statement to insert a batch of data every 60 seconds.",
            "D": "Use the MERGE statement to apply updates in batch every 60 seconds."
        },
        "answer": "B",
        "reason": "For real-time analysis and quick data availability, the appropriate option is the combination of the pipeline with BigQuery."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "101",
        "question": "You need to copy millions of sensitive patient records from a relational database to BigQuery. The total size of the database is 10 TB. You need to design a solution that is secure and time-efficient. What should you do?",
        "options": {
            "A": "Export the records from the database as an Avro file. Upload the file to GCS using gsutil, and then load the Avro file into BigQuery using the BigQuery web UI in the GCP Console.",
            "B": "Export the records from the database as an Avro file. Copy the file onto a Transfer Appliance and send it to Google, and then load the Avro file into BigQuery using the BigQuery web UI in the GCP Console.",
            "C": "Export the records from the database into a CSV file. Create a public URL for the CSV file, and then use Storage Transfer Service to move the file to Cloud Storage. Load the CSV file into BigQuery using the BigQuery web UI in the GCP Console.",
            "D": "Export the records from the database as an Avro file. Create a public URL for the Avro file, and then use Storage Transfer Service to move the file to Cloud Storage. Load the Avro file into BigQuery using the BigQuery web UI in the GCP Console."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "102",
        "question": "You need to create a near real-time inventory dashboard that reads the main inventory tables in your BigQuery data warehouse. Historical inventory data is stored as inventory balances by item and location. You have several thousand updates to inventory every hour. You want to maximize performance of the dashboard and ensure that the data is accurate. What should you do?",
        "options": {
            "A": "Leverage BigQuery UPDATE statements to update the inventory balances as they are changing.",
            "B": "Partition the inventory balance table by item to reduce the amount of data scanned with each inventory update.",
            "C": "Use the BigQuery streaming the stream changes into a daily inventory movement table. Calculate balances in a view that joins it to the historical inventory balance table. Update the inventory balance table nightly.",
            "D": "Use the BigQuery bulk loader to batch load inventory changes into a daily inventory movement table. Calculate balances in a view that joins it to the historical inventory balance table. Update the inventory balance table nightly."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "103",
        "question": "You have a data stored in BigQuery. The data in the BigQuery dataset must be highly available. You need to define a storage, backup, and recovery strategy of this data that minimizes cost. How should you configure the BigQuery table that have a recovery point objective (RPO) of 30 days?",
        "options": {
            "A": "Set the BigQuery dataset to be regional. In the event of an emergency, use a point-in-time snapshot to recover the data.",
            "B": "Set the BigQuery dataset to be regional. Create a scheduled query to make copies of the data to tables suffixed with the time of the backup. In the event of an emergency, use the backup copy of the table.",
            "C": "Set the BigQuery dataset to be multi-regional. In the event of an emergency, use a point-in-time snapshot to recover the data.",
            "D": "Set the BigQuery dataset to be multi-regional. Create a scheduled query to make copies of the data to tables suffixed with the time of the backup. In the event of an emergency, use the backup copy of the table."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "104",
        "question": "You used Dataprep to create a recipe on a sample of data in a BigQuery table. You want to reuse this recipe on a daily upload of data with the same schema, after the load job with variable execution time completes. What should you do?",
        "options": {
            "A": "Create a cron schedule in Dataprep.",
            "B": "Create an App Engine cron job to schedule the execution of the Dataprep job.",
            "C": "Export the recipe as a Dataprep template, and create a job in Cloud Scheduler.",
            "D": "Export the Dataprep job as a Dataflow template, and incorporate it into a Composer job."
        },
        "answer": "D",
        "reason": "Since the load job execution time is unexpected, schedule the Dataprep based on a fixed time window may not work. When the Dataprep job run the first time, we can find the Dataflow job for that in the console. We can use that to create the template with the help of the Composer to determine if the load job is completed, we can then trigger the Dataflow job"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "105",
        "question": "You want to automate execution of a multi-step data pipeline running on Google Cloud. The pipeline includes Dataproc and Dataflow jobs that have multiple dependencies on each other. You want to use managed services where possible, and the pipeline will run every day. Which tool should you use?",
        "options": {
            "A": "cron",
            "B": "Cloud Composer",
            "C": "Cloud Scheduler",
            "D": "Workflow Templates on Dataproc"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "106",
        "question": "You are managing a Cloud Dataproc cluster. You need to make a job run faster while minimizing costs, without losing work in progress on your clusters. What should you do?",
        "options": {
            "A": "Increase the cluster size with more non-preemptible workers.",
            "B": "Increase the cluster size with preemptible worker nodes, and configure them to forcefully decommission.",
            "C": "Increase the cluster size with preemptible worker nodes, and use Cloud Stackdriver to trigger a script to preserve work.",
            "D": "Increase the cluster size with preemptible worker nodes, and configure them to use graceful decommissioning."
        },
        "answer": "D",
        "reason": "All your workers need to be the same kind. Use Graceful Decommissioning for don't lose any data and add more(increase the cluster) preemptible workers because there are more cost-effective."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "107",
        "question": "You work for a shipping company that uses handheld scanners to read shipping labels. Your company has strict data privacy standards that require scanners to only transmit tracking numbers when events are sent to Kafka topics. A recent software update caused the scanners to accidentally transmit recipients' personally identifiable information (PII) to analytics systems, which violates user privacy rules. You want to quickly build a scalable solution using cloud-native managed services to prevent exposure of PII to the analytics systems. What should you do?",
        "options": {
            "A": "Create an authorized view in BigQuery to restrict access to tables with sensitive data.",
            "B": "Install a third-party data validation tool on Compute Engine virtual machines to check the incoming data for sensitive information.",
            "C": "Use Cloud Logging to analyze the data passed through the total pipeline to identify transactions that may contain sensitive information.",
            "D": "Build a Cloud Function that reads the topics and makes a call to the Cloud Data Loss Prevention (Cloud DLP) API. Use the tagging and confidence levels to either pass or quarantine the data in a bucket for review."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "108",
        "question": "You have developed three data processing jobs. One executes a Cloud Dataflow pipeline that transforms data uploaded to Cloud Storage and writes results to BigQuery. The second ingests data from on-premises servers and uploads it to Cloud Storage. The third is a Cloud Dataflow pipeline that gets information from third-party data providers and uploads the information to Cloud Storage. You need to be able to schedule and monitor the execution of these three workflows and manually execute them when needed. What should you do?",
        "options": {
            "A": "Create a Direct Acyclic Graph in Cloud Composer to schedule and monitor the jobs.",
            "B": "Use Stackdriver Monitoring and set up an alert with a Webhook notification to trigger the jobs.",
            "C": "Develop an App Engine application to schedule and request the status of the jobs using GCP API calls.",
            "D": "Set up cron jobs in a Compute Engine instance to schedule and monitor the pipelines using GCP API calls."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "109",
        "question": "You have Cloud Functions written in Node.js that pull messages from Cloud Pub/Sub and send the data to BigQuery. You observe that the message processing rate on the Pub/Sub topic is orders of magnitude higher than anticipated, but there is no error logged in Cloud Logging. What are the two most likely causes of this problem? (Choose two.)",
        "options": {
            "A": "Publisher throughput quota is too small.",
            "B": "Total outstanding messages exceed the 10-MB maximum.",
            "C": "Error handling in the subscriber code is not handling run-time errors properly.",
            "D": "The subscriber code cannot keep up with the messages.",
            "E": "The subscriber code does not acknowledge the messages that it pulls."
        },
        "answer": "CE",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "110",
        "question": "You are creating a new pipeline in Google Cloud to stream IoT data from Cloud Pub/Sub through Cloud Dataflow to BigQuery. While previewing the data, you notice that roughly 2% of the data appears to be corrupt. You need to modify the Cloud Dataflow pipeline to filter out this corrupt data. What should you do?",
        "options": {
            "A": "Add a SideInput that returns a Boolean if the element is corrupt.",
            "B": "Add a ParDo transform in Cloud Dataflow to discard corrupt elements.",
            "C": "Add a Partition transform in Cloud Dataflow to separate valid data from corrupt data.",
            "D": "Add a GroupByKey transform in Cloud Dataflow to group all of the valid data together and discard the rest."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "111",
        "question": "You have historical data covering the last three years in BigQuery and a data pipeline that delivers new data to BigQuery daily. You have noticed that when the Data Science team runs a query filtered on a date column and limited to 30`\"90 days of data, the query scans the entire table. You also noticed that your bill is increasing more quickly than you expected. You want to resolve the issue as cost-effectively as possible while maintaining the ability to conduct SQL queries. What should you do?",
        "options": {
            "A": "Re-create the tables using DDL. Partition the tables by a column containing a TIMESTAMP or DATE Type.",
            "B": "Recommend that the Data Science team export the table to a CSV file on Cloud Storage and use Cloud Datalab to explore the data by reading the files directly.",
            "C": "Modify your pipeline to maintain the last 30ג€\"90 days of data in one table and the longer history in a different table to minimize full table scans over the entire history.",
            "D": "Write an Apache Beam pipeline that creates a BigQuery table per day. Recommend that the Data Science team use wildcards on the table name suffixes to select the data they need."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "112",
        "question": "You operate a logistics company, and you want to improve event delivery reliability for vehicle-based sensors. You operate small data centers around the world to capture these events, but leased lines that provide connectivity from your event collection infrastructure to your event processing infrastructure are unreliable, with unpredictable latency. You want to address this issue in the most cost-effective way. What should you do?",
        "options": {
            "A": "Deploy small Kafka clusters in your data centers to buffer events.",
            "B": "Have the data acquisition devices publish data to Cloud Pub/Sub.",
            "C": "Establish a Cloud Interconnect between all remote data centers and Google.",
            "D": "Write a Cloud Dataflow pipeline that aggregates all data in session windows."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "113",
        "question": "You are a retailer that wants to integrate your online sales capabilities with different in-home assistants, such as Google Home. You need to interpret customer voice commands and issue an order to the backend systems. Which solutions should you choose?",
        "options": {
            "A": "Speech-to-Text API",
            "B": "Cloud Natural Language API",
            "C": "Dialogflow Enterprise Edition",
            "D": "AutoML Natural Language"
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "114",
        "question": "Your company has a hybrid cloud initiative. You have a complex data pipeline that moves data between cloud provider services and leverages services from each of the cloud providers. Which cloud-native service should you use to orchestrate the entire pipeline?",
        "options": {
            "A": "Cloud Dataflow",
            "B": "Cloud Composer",
            "C": "Cloud Dataprep",
            "D": "Cloud Dataproc"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "115",
        "question": "You use a dataset in BigQuery for analysis. You want to provide third-party companies with access to the same dataset. You need to keep the costs of data sharing low and ensure that the data is current. Which solution should you choose?",
        "options": {
            "A": "Use Analytics Hub to control data access, and provide third party companies with access to the dataset.",
            "B": "Use Cloud Scheduler to export the data on a regular basis to Cloud Storage, and provide third-party companies with access to the bucket.",
            "C": "Create a separate dataset in BigQuery that contains the relevant data to share, and provide third-party companies with access to the new dataset.",
            "D": "Create a Dataflow job that reads the data in frequent time intervals, and writes it to the relevant BigQuery dataset or Cloud Storage bucket for third-party companies to use."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "116",
        "question": "Your company is in the process of migrating its on-premises data warehousing solutions to BigQuery. The existing data warehouse uses trigger-based change data capture (CDC) to apply updates from multiple transactional database sources on a daily basis. With BigQuery, your company hopes to improve its handling of CDC so that changes to the source systems are available to query in BigQuery in near-real time using log-based CDC streams, while also optimizing for the performance of applying changes to the data warehouse. Which two steps should they take to ensure that changes are available in the BigQuery reporting table with minimal latency while reducing compute overhead? (Choose two.)",
        "options": {
            "A": "Perform a DML INSERT, UPDATE, or DELETE to replicate each individual CDC record in real time directly on the reporting table.",
            "B": "Insert each new CDC record and corresponding operation type to a staging table in real time.",
            "C": "Periodically DELETE outdated records from the reporting table.",
            "D": "Periodically use a DML MERGE to perform several DML INSERT, UPDATE, and DELETE operations at the same time on the reporting table.",
            "E": "Insert each new CDC record and corresponding operation type in real time to the reporting table, and use a materialized view to expose only the newest version of each unique record."
        },
        "answer": "BD",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "117",
        "question": "You are designing a data processing pipeline. The pipeline must be able to scale automatically as load increases. Messages must be processed at least once and must be ordered within windows of 1 hour. How should you design the solution?",
        "options": {
            "A": "Use Apache Kafka for message ingestion and use Cloud Dataproc for streaming analysis.",
            "B": "Use Apache Kafka for message ingestion and use Cloud Dataflow for streaming analysis.",
            "C": "Use Cloud Pub/Sub for message ingestion and Cloud Dataproc for streaming analysis.",
            "D": "Use Cloud Pub/Sub for message ingestion and Cloud Dataflow for streaming analysis."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "118",
        "question": "You need to set access to BigQuery for different departments within your company. Your solution should comply with the following requirements:\n• Each department should have access only to their data.\n• Each department will have one or more leads who need to be able to create and update tables and provide them to their team.\n• Each department has data analysts who need to be able to query but not modify data.\nHow should you set access to the data in BigQuery?",
        "options": {
            "A": "Create a dataset for each department. Assign the department leads the role of OWNER, and assign the data analysts the role of WRITER on their dataset.",
            "B": "Create a dataset for each department. Assign the department leads the role of WRITER, and assign the data analysts the role of READER on their dataset.",
            "C": "Create a table for each department. Assign the department leads the role of Owner, and assign the data analysts the role of Editor on the project the table is in.",
            "D": "Create a table for each department. Assign the department leads the role of Editor, and assign the data analysts the role of Viewer on the project the table is in."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "119",
        "question": "You operate a database that stores stock trades and an application that retrieves average stock price for a given company over an adjustable window of time. The data is stored in Cloud Bigtable where the datetime of the stock trade is the beginning of the row key. Your application has thousands of concurrent users, and you notice that performance is starting to degrade as more stocks are added. What should you do to improve the performance of your application?",
        "options": {
            "A": "Change the row key syntax in your Cloud Bigtable table to begin with the stock symbol.",
            "B": "Change the row key syntax in your Cloud Bigtable table to begin with a random number per second.",
            "C": "Change the data pipeline to use BigQuery for storing stock trades, and update your application.",
            "D": "Use Cloud Dataflow to write a summary of each day's stock trades to an Avro file on Cloud Storage. Update your application to read from Cloud Storage and Cloud Bigtable to compute the responses."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "120",
        "question": "You are operating a Cloud Dataflow streaming pipeline. The pipeline aggregates events from a Cloud Pub/Sub subscription source, within a window, and sinks the resulting aggregation to a Cloud Storage bucket. The source has consistent throughput. You want to monitor an alert on behavior of the pipeline with Cloud Stackdriver to ensure that it is processing data. Which Stackdriver alerts should you create?",
        "options": {
            "A": "An alert based on a decrease of subscription/num_undelivered_messages for the source and a rate of change increase of instance/storage/ used_bytes for the destination",
            "B": "An alert based on an increase of subscription/num_undelivered_messages for the source and a rate of change decrease of instance/storage/ used_bytes for the destination",
            "C": "An alert based on a decrease of instance/storage/used_bytes for the source and a rate of change increase of subscription/ num_undelivered_messages for the destination",
            "D": "An alert based on an increase of instance/storage/used_bytes for the source and a rate of change decrease of subscription/ num_undelivered_messages for the destination"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "121",
        "question": "You currently have a single on-premises Kafka cluster in a data center in the us-east region that is responsible for ingesting messages from IoT devices globally. Because large parts of globe have poor internet connectivity, messages sometimes batch at the edge, come in all at once, and cause a spike in load on your Kafka cluster. This is becoming difficult to manage and prohibitively expensive. What is the Google-recommended cloud native architecture for this scenario?",
        "options": {
            "A": "Edge TPUs as sensor devices for storing and transmitting the messages.",
            "B": "Cloud Dataflow connected to the Kafka cluster to scale the processing of incoming messages.",
            "C": "An IoT gateway connected to Cloud Pub/Sub, with Cloud Dataflow to read and process the messages from Cloud Pub/Sub.",
            "D": "A Kafka cluster virtualized on Compute Engine in us-east with Cloud Load Balancing to connect to the devices around the world."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "122",
        "question": "You decided to use Cloud Datastore to ingest vehicle telemetry data in real time. You want to build a storage system that will account for the long-term data growth, while keeping the costs low. You also want to create snapshots of the data periodically, so that you can make a point-in-time (PIT) recovery, or clone a copy of the data for Cloud Datastore in a different environment. You want to archive these snapshots for a long time. Which two methods can accomplish this? (Choose two.)",
        "options": {
            "A": "Use managed export, and store the data in a Cloud Storage bucket using Nearline or Coldline class.",
            "B": "Use managed export, and then import to Cloud Datastore in a separate project under a unique namespace reserved for that export.",
            "C": "Use managed export, and then import the data into a BigQuery table created just for that export, and delete temporary export files.",
            "D": "Write an application that uses Cloud Datastore client libraries to read all the entities. Treat each entity as a BigQuery table row via BigQuery streaming insert. Assign an export timestamp for each export, and attach it as an extra column for each row. Make sure that the BigQuery table is partitioned using the export timestamp column.",
            "E": "Write an application that uses Cloud Datastore client libraries to read all the entities. Format the exported data into a JSON file. Apply compression before storing the data in Cloud Source Repositories."
        },
        "answer": "AB",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "123",
        "question": "You need to create a data pipeline that copies time-series transaction data so that it can be queried from within BigQuery by your data science team for analysis. Every hour, thousands of transactions are updated with a new status. The size of the initial dataset is 1.5 PB, and it will grow by 3 TB per day. The data is heavily structured, and your data science team will build machine learning models based on this data. You want to maximize performance and usability for your data science team. Which two strategies should you adopt? (Choose two.)",
        "options": {
            "A": "Denormalize the data as must as possible.",
            "B": "Preserve the structure of the data as much as possible.",
            "C": "Use BigQuery UPDATE to further reduce the size of the dataset.",
            "D": "Develop a data pipeline where status updates are appended to BigQuery instead of updated.",
            "E": "Copy a daily snapshot of transaction data to Cloud Storage and store it as an Avro file. Use BigQuery's support for external data sources to query."
        },
        "answer": "AD",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "124",
        "question": "You are designing a cloud-native historical data processing system to meet the following conditions:\n• The data being analyzed is in CSV, Avro, and PDF formats and will be accessed by multiple analysis tools including Dataproc, BigQuery, and Compute Engine.\n• A batch pipeline moves daily data.\n• Performance is not a factor in the solution.\n• The solution design should maximize availability.\nHow should you design data storage for this solution?",
        "options": {
            "A": "Create a Dataproc cluster with high availability. Store the data in HDFS, and perform analysis as needed.",
            "B": "Store the data in BigQuery. Access the data using the BigQuery Connector on Dataproc and Compute Engine.",
            "C": "Store the data in a regional Cloud Storage bucket. Access the bucket directly using Dataproc, BigQuery, and Compute Engine.",
            "D": "Store the data in a multi-regional Cloud Storage bucket. Access the data directly using Dataproc, BigQuery, and Compute Engine."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "125",
        "question": "You have a petabyte of analytics data and need to design a storage and processing platform for it. You must be able to perform data warehouse-style analytics on the data in Google Cloud and expose the dataset as files for batch analysis tools in other cloud providers. What should you do?",
        "options": {
            "A": "Store and process the entire dataset in BigQuery.",
            "B": "Store and process the entire dataset in Bigtable.",
            "C": "Store the full dataset in BigQuery, and store a compressed copy of the data in a Cloud Storage bucket.",
            "D": "Store the warm data as files in Cloud Storage, and store the active data in BigQuery. Keep this ratio as 80% warm and 20% active."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "126",
        "question": "You work for a manufacturing company that sources up to 750 different components, each from a different supplier. You've collected a labeled dataset that has on average 1000 examples for each unique component. Your team wants to implement an app to help warehouse workers recognize incoming components based on a photo of the component. You want to implement the first working version of this app (as Proof-Of-Concept) within a few working days. What should you do?",
        "options": {
            "A": "Use Cloud Vision AutoML with the existing dataset.",
            "B": "Use Cloud Vision AutoML, but reduce your dataset twice.",
            "C": "Use Cloud Vision API by providing custom labels as recognition hints.",
            "D": "Train your own image recognition model leveraging transfer learning techniques."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "127",
        "question": "You are working on a niche product in the image recognition domain. Your team has developed a model that is dominated by custom C++ TensorFlow ops your team has implemented. These ops are used inside your main training loop and are performing bulky matrix multiplications. It currently takes up to several days to train a model. You want to decrease this time significantly and keep the cost low by using an accelerator on Google Cloud. What should you do?",
        "options": {
            "A": "Use Cloud TPUs without any additional adjustment to your code.",
            "B": "Use Cloud TPUs after implementing GPU kernel support for your customs ops.",
            "C": "Use Cloud GPUs after implementing GPU kernel support for your customs ops.",
            "D": "Stay on CPUs, and increase the size of the cluster you're training your model on."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "128",
        "question": "You work on a regression problem in a natural language processing domain, and you have 100M labeled examples in your dataset. You have randomly shuffled your data and split your dataset into train and test samples (in a 90/10 ratio). After you trained the neural network and evaluated your model on a test set, you discover that the root-mean-squared error (RMSE) of your model is twice as high on the train set as on the test set. How should you improve the performance of your model?",
        "options": {
            "A": "Increase the share of the test sample in the train-test split.",
            "B": "Try to collect more data and increase the size of your dataset.",
            "C": "Try out regularization techniques (e.g., dropout of batch normalization) to avoid overfitting.",
            "D": "Increase the complexity of your model by, e.g., introducing an additional layer or increase sizing the size of vocabularies or n-grams used."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "129",
        "question": "You use BigQuery as your centralized analytics platform. New data is loaded every day, and an ETL pipeline modifies the original data and prepares it for the final users. This ETL pipeline is regularly modified and can generate errors, but sometimes the errors are detected only after 2 weeks. You need to provide a method to recover from these errors, and your backups should be optimized for storage costs. How should you organize your data in BigQuery and store your backups?",
        "options": {
            "A": "Organize your data in a single table, export, and compress and store the BigQuery data in Cloud Storage.",
            "B": "Organize your data in separate tables for each month, and export, compress, and store the data in Cloud Storage.",
            "C": "Organize your data in separate tables for each month, and duplicate your data on a separate dataset in BigQuery.",
            "D": "Organize your data in separate tables for each month, and use snapshot decorators to restore the table to a time prior to the corruption."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "130",
        "question": "The marketing team at your organization provides regular updates of a segment of your customer dataset. The marketing team has given you a CSV with 1 million records that must be updated in BigQuery. When you use the UPDATE statement in BigQuery, you receive a quotaExceeded error. What should you do?",
        "options": {
            "A": "Reduce the number of records updated each day to stay within the BigQuery UPDATE DML statement limit.",
            "B": "Increase the BigQuery UPDATE DML statement limit in the Quota management section of the Google Cloud Platform Console.",
            "C": "Split the source CSV file into smaller CSV files in Cloud Storage to reduce the number of BigQuery UPDATE DML statements per BigQuery job.",
            "D": "Import the new records from the CSV file into a new BigQuery table. Create a BigQuery job that merges the new records with the existing records and writes the results to a new BigQuery table."
        },
        "answer": "D",
        "reason": "Import all the data into a separate table and use that for updates is better than creating smaller csv which leads to more operational time to get it done and harder to manage it."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "131",
        "question": "As your organization expands its usage of GCP, many teams have started to create their own projects. Projects are further multiplied to accommodate different stages of deployments and target audiences. Each project requires unique access control configurations. The central IT team needs to have access to all projects. Furthermore, data from Cloud Storage buckets and BigQuery datasets must be shared for use in other projects in an ad hoc way. You want to simplify access control management by minimizing the number of policies. Which two steps should you take? (Choose two.)",
        "options": {
            "A": "Use Cloud Deployment Manager to automate access provision.",
            "B": "Introduce resource hierarchy to leverage access control policy inheritance.",
            "C": "Create distinct groups for various teams, and specify groups in Cloud IAM policies.",
            "D": "Only use service accounts when sharing data for Cloud Storage buckets and BigQuery datasets.",
            "E": "For each Cloud Storage bucket or BigQuery dataset, decide which projects need access. Find all the active members who have access to these projects, and create a Cloud IAM policy to grant access to all these users."
        },
        "answer": "BC",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "132",
        "question": "Your United States-based company has created an application for assessing and responding to user actions. The primary table's data volume grows by 250,000 records per second. Many third parties use your application's APIs to build the functionality into their own frontend applications. Your application's APIs should comply with the following requirements:\n• Single global endpoint\n• ANSI SQL support\n• Consistent access to the most up-to-date data\nWhat should you do?",
        "options": {
            "A": "Implement BigQuery with no region selected for storage or processing.",
            "B": "Implement Cloud Spanner with the leader in North America and read-only replicas in Asia and Europe.",
            "C": "Implement Cloud SQL for PostgreSQL with the master in North America and read replicas in Asia and Europe.",
            "D": "Implement Bigtable with the primary cluster in North America and secondary clusters in Asia and Europe."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "133",
        "question": "A data scientist has created a BigQuery ML model and asks you to create an ML pipeline to serve predictions. You have a REST API application with the requirement to serve predictions for an individual user ID with latency under 100 milliseconds. You use the following query to generate predictions: SELECT predicted_label, user_id FROM ML.PREDICT (MODEL 'dataset.model', table user_features). How should you create the ML pipeline?",
        "options": {
            "A": "Add a WHERE clause to the query, and grant the BigQuery Data Viewer role to the application service account.",
            "B": "Create an Authorized View with the provided query. Share the dataset that contains the view with the application service account.",
            "C": "Create a Dataflow pipeline using BigQueryIO to read results from the query. Grant the Dataflow Worker role to the application service account.",
            "D": "Create a Dataflow pipeline using BigQueryIO to read predictions for all users from the query. Write the results to Bigtable using BigtableIO. Grant the Bigtable Reader role to the application service account so that the application can read predictions for individual users from Bigtable."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "134",
        "question": "You are building an application to share financial market data with consumers, who will receive data feeds. Data is collected from the markets in real time.\nConsumers will receive the data in the following ways:\n• Real-time event stream\n• ANSI SQL access to real-time stream and historical data\n• Batch historical exports\nWhich solution should you use?",
        "options": {
            "A": "Cloud Dataflow, Cloud SQL, Cloud Spanner",
            "B": "Cloud Pub/Sub, Cloud Storage, BigQuery",
            "C": "Cloud Dataproc, Cloud Dataflow, BigQuery",
            "D": "Cloud Pub/Sub, Cloud Dataproc, Cloud SQL"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "135",
        "question": "You are building a new application that you need to collect data from in a scalable way. Data arrives continuously from the application throughout the day, and you expect to generate approximately 150 GB of JSON data per day by the end of the year. Your requirements are:\n• Decoupling producer from consumer\n• Space and cost-efficient storage of the raw ingested data, which is to be stored indefinitely\n• Near real-time SQL query\n• Maintain at least 2 years of historical data, which will be queried with SQL\nWhich pipeline should you use to meet these requirements?",
        "options": {
            "A": "Create an application that provides an API. Write a tool to poll the API and write data to Cloud Storage as gzipped JSON files.",
            "B": "Create an application that writes to a Cloud SQL database to store the data. Set up periodic exports of the database to write to Cloud Storage and load into BigQuery.",
            "C": "Create an application that publishes events to Cloud Pub/Sub, and create Spark jobs on Cloud Dataproc to convert the JSON data to Avro format, stored on HDFS on Persistent Disk.",
            "D": "Create an application that publishes events to Cloud Pub/Sub, and create a Cloud Dataflow pipeline that transforms the JSON event payloads to Avro, writing the data to Cloud Storage and BigQuery."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "136",
        "question": "You are running a pipeline in Dataflow that receives messages from a Pub/Sub topic and writes the results to a BigQuery dataset in the EU. Currently, your pipeline is located in europe-west4 and has a maximum of 3 workers, instance type n1-standard-1. You notice that during peak periods, your pipeline is struggling to process records in a timely fashion, when all 3 workers are at maximum CPU utilization. Which two actions can you take to increase performance of your pipeline? (Choose two.)",
        "options": {
            "A": "Increase the number of max workers",
            "B": "Use a larger instance type for your Dataflow workers",
            "C": "Change the zone of your Dataflow pipeline to run in us-central1",
            "D": "Create a temporary table in Bigtable that will act as a buffer for new data. Create a new step in your pipeline to write to this table first, and then create a new pipeline to write from Bigtable to BigQuery",
            "E": "Create a temporary table in Cloud Spanner that will act as a buffer for new data. Create a new step in your pipeline to write to this table first, and then create a new pipeline to write from Cloud Spanner to BigQuery"
        },
        "answer": "AB",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "137",
        "question": "You have a data pipeline with a Dataflow job that aggregates and writes time series metrics to Bigtable. You notice that data is slow to update in Bigtable. This data feeds a dashboard used by thousands of users across the organization. You need to support additional concurrent users and reduce the amount of time required to write the data. Which two actions should you take? (Choose two.)",
        "options": {
            "A": "Configure your Dataflow pipeline to use local execution",
            "B": "Increase the maximum number of Dataflow workers by setting maxNumWorkers in PipelineOptions",
            "C": "Increase the number of nodes in the Bigtable cluster",
            "D": "Modify your Dataflow pipeline to use the Flatten transform before writing to Bigtable",
            "E": "Modify your Dataflow pipeline to use the CoGroupByKey transform before writing to Bigtable"
        },
        "answer": "BC",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "138",
        "question": "You have several Spark jobs that run on a Cloud Dataproc cluster on a schedule. Some of the jobs run in sequence, and some of the jobs run concurrently. You need to automate this process. What should you do?",
        "options": {
            "A": "Create a Cloud Dataproc Workflow Template",
            "B": "Create an initialization action to execute the jobs",
            "C": "Create a Directed Acyclic Graph in Cloud Composer",
            "D": "Create a Bash script that uses the Cloud SDK to create a cluster, execute jobs, and then tear down the cluster"
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "139",
        "question": "You are building a new data pipeline to share data between two different types of applications: jobs generators and job runners. Your solution must scale to accommodate increases in usage and must accommodate the addition of new applications without negatively affecting the performance of existing ones. What should you do?",
        "options": {
            "A": "Create an API using App Engine to receive and send messages to the applications",
            "B": "Use a Cloud Pub/Sub topic to publish jobs, and use subscriptions to execute them",
            "C": "Create a table on Cloud SQL, and insert and delete rows with the job information",
            "D": "Create a table on Cloud Spanner, and insert and delete rows with the job information"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "140",
        "question": "You need to create a new transaction table in Cloud Spanner that stores product sales data. You are deciding what to use as a primary key. From a performance perspective, which strategy should you choose?",
        "options": {
            "A": "The current epoch time",
            "B": "A concatenation of the product name and the current epoch time",
            "C": "A random universally unique identifier number (version 4 UUID)",
            "D": "The original order identification number from the sales system, which is a monotonically increasing integer"
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "141",
        "question": "Data Analysts in your company have the Cloud IAM Owner role assigned to them in their projects to allow them to work with multiple GCP products in their projects. Your organization requires that all BigQuery data access logs be retained for 6 months. You need to ensure that only audit personnel in your company can access the data access logs for all projects. What should you do?",
        "options": {
            "A": "Enable data access logs in each Data Analyst's project. Restrict access to Stackdriver Logging via Cloud IAM roles.",
            "B": "Export the data access logs via a project-level export sink to a Cloud Storage bucket in the Data Analysts' projects. Restrict access to the Cloud Storage bucket.",
            "C": "Export the data access logs via a project-level export sink to a Cloud Storage bucket in a newly created projects for audit logs. Restrict access to the project with the exported logs.",
            "D": "Export the data access logs via an aggregated export sink to a Cloud Storage bucket in a newly created project for audit logs. Restrict access to the project that contains the exported logs."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "142",
        "question": "Each analytics team in your organization is running BigQuery jobs in their own projects. You want to enable each team to monitor slot usage within their projects. What should you do?",
        "options": {
            "A": "Create a Cloud Monitoring dashboard based on the BigQuery metric query/scanned_bytes",
            "B": "Create a Cloud Monitoring dashboard based on the BigQuery metric slots/allocated_for_project",
            "C": "Create a log export for each project, capture the BigQuery job execution logs, create a custom metric based on the totalSlotMs, and create a Cloud Monitoring dashboard based on the custom metric",
            "D": "Create an aggregated log export at the organization level, capture the BigQuery job execution logs, create a custom metric based on the totalSlotMs, and create a Cloud Monitoring dashboard based on the custom metric"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "143",
        "question": "You are operating a streaming Cloud Dataflow pipeline. Your engineers have a new version of the pipeline with a different windowing algorithm and triggering strategy. You want to update the running pipeline with the new version. You want to ensure that no data is lost during the update. What should you do?",
        "options": {
            "A": "Update the Cloud Dataflow pipeline inflight by passing the --update option with the --jobName set to the existing job name",
            "B": "Update the Cloud Dataflow pipeline inflight by passing the --update option with the --jobName set to a new unique job name",
            "C": "Stop the Cloud Dataflow pipeline with the Cancel option. Create a new Cloud Dataflow job with the updated code",
            "D": "Stop the Cloud Dataflow pipeline with the Drain option. Create a new Cloud Dataflow job with the updated code"
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "144",
        "question": "You need to move 2 PB of historical data from an on-premises storage appliance to Cloud Storage within six months, and your outbound network capacity is constrained to 20 Mb/sec. How should you migrate this data to Cloud Storage?",
        "options": {
            "A": "Use Transfer Appliance to copy the data to Cloud Storage",
            "B": "Use gsutil cp ג€\"J to compress the content being uploaded to Cloud Storage",
            "C": "Create a private URL for the historical data, and then use Storage Transfer Service to copy the data to Cloud Storage",
            "D": "Use trickle or ionice along with gsutil cp to limit the amount of bandwidth gsutil utilizes to less than 20 Mb/sec so it does not interfere with the production traffic"
        },
        "answer": "A",
        "reason": "Huge amount of data with log network bandwidth, Transfer applicate is best for moving data over 100TB."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "145",
        "question": "You receive data files in CSV format monthly from a third party. You need to cleanse this data, but every third month the schema of the files changes. Your requirements for implementing these transformations include:\n• Executing the transformations on a schedule\n• Enabling non-developer analysts to modify transformations\n• Providing a graphical tool for designing transformations\nWhat should you do?",
        "options": {
            "A": "Use Dataprep by Trifacta to build and maintain the transformation recipes, and execute them on a scheduled basis",
            "B": "Load each month's CSV data into BigQuery, and write a SQL query to transform the data to a standard schema. Merge the transformed tables together with a SQL query",
            "C": "Help the analysts write a Dataflow pipeline in Python to perform the transformation. The Python code should be stored in a revision control system and modified as the incoming data's schema changes",
            "D": "Use Apache Spark on Dataproc to infer the schema of the CSV file before creating a Dataframe. Then implement the transformations in Spark SQL before writing the data out to Cloud Storage and loading into BigQuery"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "146",
        "question": "You want to migrate an on-premises Hadoop system to Cloud Dataproc. Hive is the primary tool in use, and the data format is Optimized Row Columnar (ORC). All ORC files have been successfully copied to a Cloud Storage bucket. You need to replicate some data to the cluster's local Hadoop Distributed File System (HDFS) to maximize performance. What are two ways to start using Hive in Cloud Dataproc? (Choose two.)",
        "options": {
            "A": "Run the gsutil utility to transfer all ORC files from the Cloud Storage bucket to HDFS. Mount the Hive tables locally.",
            "B": "Run the gsutil utility to transfer all ORC files from the Cloud Storage bucket to any node of the Dataproc cluster. Mount the Hive tables locally.",
            "C": "Run the gsutil utility to transfer all ORC files from the Cloud Storage bucket to the master node of the Dataproc cluster. Then run the Hadoop utility to copy them do HDFS. Mount the Hive tables from HDFS.",
            "D": "Leverage Cloud Storage connector for Hadoop to mount the ORC files as external Hive tables. Replicate external Hive tables to the native ones.",
            "E": "Load the ORC files into BigQuery. Leverage BigQuery connector for Hadoop to mount the BigQuery tables as external Hive tables. Replicate external Hive tables to the native ones."
        },
        "answer": "CD",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "147",
        "question": "You are implementing several batch jobs that must be executed on a schedule. These jobs have many interdependent steps that must be executed in a specific order. Portions of the jobs involve executing shell scripts, running Hadoop jobs, and running queries in BigQuery. The jobs are expected to run for many minutes up to several hours. If the steps fail, they must be retried a fixed number of times. Which service should you use to manage the execution of these jobs?",
        "options": {
            "A": "Cloud Scheduler",
            "B": "Cloud Dataflow",
            "C": "Cloud Functions",
            "D": "Cloud Composer"
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "148",
        "question": "You work for a shipping company that has distribution centers where packages move on delivery lines to route them properly. The company wants to add cameras to the delivery lines to detect and track any visual damage to the packages in transit. You need to create a way to automate the detection of damaged packages and flag them for human review in real time while the packages are in transit. Which solution should you choose?",
        "options": {
            "A": "Use BigQuery machine learning to be able to train the model at scale, so you can analyze the packages in batches.",
            "B": "Train an AutoML model on your corpus of images, and build an API around that model to integrate with the package tracking applications.",
            "C": "Use the Cloud Vision API to detect for damage, and raise an alert through Cloud Functions. Integrate the package tracking applications with this function.",
            "D": "Use TensorFlow to create a model that is trained on your corpus of images. Create a Python notebook in Cloud Datalab that uses this model so you can analyze for damaged packages."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "149",
        "question": "You are migrating your data warehouse to BigQuery. You have migrated all of your data into tables in a dataset. Multiple users from your organization will be using the data. They should only see certain tables based on their team membership. How should you set user permissions?",
        "options": {
            "A": "Assign the users/groups data viewer access at the table level for each table",
            "B": "Create SQL views for each team in the same dataset in which the data resides, and assign the users/groups data viewer access to the SQL views",
            "C": "Create authorized views for each team in the same dataset in which the data resides, and assign the users/groups data viewer access to the authorized views",
            "D": "Create authorized views for each team in datasets created for each team. Assign the authorized views data viewer access to the dataset in which the data resides. Assign the users/groups data viewer access to the datasets in which the authorized views reside"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "150",
        "question": "You want to build a managed Hadoop system as your data lake. The data transformation process is composed of a series of Hadoop jobs executed in sequence. To accomplish the design of separating storage from compute, you decided to use the Cloud Storage connector to store all input data, output data, and intermediary data. However, you noticed that one Hadoop job runs very slowly with Cloud Dataproc, when compared with the on-premises bare-metal Hadoop environment (8-core nodes with 100-GB RAM). Analysis shows that this particular Hadoop job is disk I/O intensive. You want to resolve the issue. What should you do?",
        "options": {
            "A": "Allocate sufficient memory to the Hadoop cluster, so that the intermediary data of that particular Hadoop job can be held in memory",
            "B": "Allocate sufficient persistent disk space to the Hadoop cluster, and store the intermediate data of that particular Hadoop job on native HDFS",
            "C": "Allocate more CPU cores of the virtual machine instances of the Hadoop cluster so that the networking bandwidth for each instance can scale up",
            "D": "Allocate additional network interface card (NIC), and configure link aggregation in the operating system to use the combined throughput when working with Cloud Storage"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "151",
        "question": "You work for an advertising company, and you've developed a Spark ML model to predict click-through rates at advertisement blocks. You've been developing everything at your on-premises data center, and now your company is migrating to Google Cloud. Your data center will be closing soon, so a rapid lift-and-shift migration is necessary. However, the data you've been using will be migrated to BigQuery. You periodically retrain your Spark ML models, so you need to migrate existing training pipelines to Google Cloud. What should you do?",
        "options": {
            "A": "Use Vertex AI for training existing Spark ML models",
            "B": "Rewrite your models on TensorFlow, and start using Vertex AI",
            "C": "Use Dataproc for training existing Spark ML models, but start reading data directly from BigQuery",
            "D": "Spin up a Spark cluster on Compute Engine, and train Spark ML models on the data exported from BigQuery"
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "152",
        "question": "You work for a global shipping company. You want to train a model on 40 TB of data to predict which ships in each geographic region are likely to cause delivery delays on any given day. The model will be based on multiple attributes collected from multiple sources. Telemetry data, including location in GeoJSON format, will be pulled from each ship and loaded every hour. You want to have a dashboard that shows how many and which ships are likely to cause delays within a region. You want to use a storage solution that has native functionality for prediction and geospatial processing. Which storage solution should you use?",
        "options": {
            "A": "BigQuery",
            "B": "Cloud Bigtable",
            "C": "Cloud Datastore",
            "D": "Cloud SQL for PostgreSQL"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "153",
        "question": "You operate an IoT pipeline built around Apache Kafka that normally receives around 5000 messages per second. You want to use Google Cloud Platform to create an alert as soon as the moving average over 1 hour drops below 4000 messages per second. What should you do?",
        "options": {
            "A": "Consume the stream of data in Dataflow using Kafka IO. Set a sliding time window of 1 hour every 5 minutes. Compute the average when the window closes, and send an alert if the average is less than 4000 messages.",
            "B": "Consume the stream of data in Dataflow using Kafka IO. Set a fixed time window of 1 hour. Compute the average when the window closes, and send an alert if the average is less than 4000 messages.",
            "C": "Use Kafka Connect to link your Kafka message queue to Pub/Sub. Use a Dataflow template to write your messages from Pub/Sub to Bigtable. Use Cloud Scheduler to run a script every hour that counts the number of rows created in Bigtable in the last hour. If that number falls below 4000, send an alert.",
            "D": "Use Kafka Connect to link your Kafka message queue to Pub/Sub. Use a Dataflow template to write your messages from Pub/Sub to BigQuery. Use Cloud Scheduler to run a script every five minutes that counts the number of rows created in BigQuery in the last hour. If that number falls below 4000, send an alert."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "154",
        "question": "You plan to deploy Cloud SQL using MySQL. You need to ensure high availability in the event of a zone failure. What should you do?",
        "options": {
            "A": "Create a Cloud SQL instance in one zone, and create a failover replica in another zone within the same region.",
            "B": "Create a Cloud SQL instance in one zone, and create a read replica in another zone within the same region.",
            "C": "Create a Cloud SQL instance in one zone, and configure an external read replica in a zone in a different region.",
            "D": "Create a Cloud SQL instance in a region, and configure automatic backup to a Cloud Storage bucket in the same region."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "155",
        "question": "Your company is selecting a system to centralize data ingestion and delivery. You are considering messaging and data integration systems to address the requirements. The key requirements are:\n• The ability to seek to a particular offset in a topic, possibly back to the start of all data ever captured\n• Support for publish/subscribe semantics on hundreds of topics\nRetain per-key ordering -\nWhich system should you choose?",
        "options": {
            "A": "Apache Kafka",
            "B": "Cloud Storage",
            "C": "Dataflow",
            "D": "Firebase Cloud Messaging"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "156",
        "question": "You are planning to migrate your current on-premises Apache Hadoop deployment to the cloud. You need to ensure that the deployment is as fault-tolerant and cost-effective as possible for long-running batch jobs. You want to use a managed service. What should you do?",
        "options": {
            "A": "Deploy a Dataproc cluster. Use a standard persistent disk and 50% preemptible workers. Store data in Cloud Storage, and change references in scripts from hdfs:// to gs://",
            "B": "Deploy a Dataproc cluster. Use an SSD persistent disk and 50% preemptible workers. Store data in Cloud Storage, and change references in scripts from hdfs:// to gs://",
            "C": "Install Hadoop and Spark on a 10-node Compute Engine instance group with standard instances. Install the Cloud Storage connector, and store the data in Cloud Storage. Change references in scripts from hdfs:// to gs://",
            "D": "Install Hadoop and Spark on a 10-node Compute Engine instance group with preemptible instances. Store data in HDFS. Change references in scripts from hdfs:// to gs://"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "157",
        "question": "Your team is working on a binary classification problem. You have trained a support vector machine (SVM) classifier with default parameters, and received an area under the Curve (AUC) of 0.87 on the validation set. You want to increase the AUC of the model. What should you do?",
        "options": {
            "A": "Perform hyperparameter tuning",
            "B": "Train a classifier with deep neural networks, because neural networks would always beat SVMs",
            "C": "Deploy the model and measure the real-world AUC; it's always higher because of generalization",
            "D": "Scale predictions you get out of the model (tune a scaling factor as a hyperparameter) in order to get the highest AUC"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "158",
        "question": "You need to deploy additional dependencies to all nodes of a Cloud Dataproc cluster at startup using an existing initialization action. Company security policies require that Cloud Dataproc nodes do not have access to the Internet so public initialization actions cannot fetch resources. What should you do?",
        "options": {
            "A": "Deploy the Cloud SQL Proxy on the Cloud Dataproc master",
            "B": "Use an SSH tunnel to give the Cloud Dataproc cluster access to the Internet",
            "C": "Copy all dependencies to a Cloud Storage bucket within your VPC security perimeter",
            "D": "Use Resource Manager to add the service account used by the Cloud Dataproc cluster to the Network User role"
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "159",
        "question": "You need to choose a database for a new project that has the following requirements:\n• Fully managed\n• Able to automatically scale up\n• Transactionally consistent\n• Able to scale up to 6 TB\n• Able to be queried using SQL\nWhich database do you choose?",
        "options": {
            "A": "Cloud SQL",
            "B": "Cloud Bigtable",
            "C": "Cloud Spanner",
            "D": "Cloud Datastore"
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "160",
        "question": "You work for a mid-sized enterprise that needs to move its operational system transaction data from an on-premises database to GCP. The database is about 20 TB in size. Which database should you choose?",
        "options": {
            "A": "Cloud SQL",
            "B": "Cloud Bigtable",
            "C": "Cloud Spanner",
            "D": "Cloud Datastore"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "161",
        "question": "You need to choose a database to store time series CPU and memory usage for millions of computers. You need to store this data in one-second interval samples. Analysts will be performing real-time, ad hoc analytics against the database. You want to avoid being charged for every query executed and ensure that the schema design will allow for future growth of the dataset. Which database and data model should you choose?",
        "options": {
            "A": "Create a table in BigQuery, and append the new samples for CPU and memory to the table",
            "B": "Create a wide table in BigQuery, create a column for the sample value at each second, and update the row with the interval for each second",
            "C": "Create a narrow table in Bigtable with a row key that combines the Computer Engine computer identifier with the sample time at each second",
            "D": "Create a wide table in Bigtable with a row key that combines the computer identifier with the sample time at each minute, and combine the values for each second as column data."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "162",
        "question": "You want to archive data in Cloud Storage. Because some data is very sensitive, you want to use the `Trust No One` (TNO) approach to encrypt your data to prevent the cloud provider staff from decrypting your data. What should you do?",
        "options": {
            "A": "Use gcloud kms keys create to create a symmetric key. Then use gcloud kms encrypt to encrypt each archival file with the key and unique additional authenticated data (AAD). Use gsutil cp to upload each encrypted file to the Cloud Storage bucket, and keep the AAD outside of Google Cloud.",
            "B": "Use gcloud kms keys create to create a symmetric key. Then use gcloud kms encrypt to encrypt each archival file with the key. Use gsutil cp to upload each encrypted file to the Cloud Storage bucket. Manually destroy the key previously used for encryption, and rotate the key once.",
            "C": "Specify customer-supplied encryption key (CSEK) in the .boto configuration file. Use gsutil cp to upload each archival file to the Cloud Storage bucket. Save the CSEK in Cloud Memorystore as permanent storage of the secret.",
            "D": "Specify customer-supplied encryption key (CSEK) in the .boto configuration file. Use gsutil cp to upload each archival file to the Cloud Storage bucket. Save the CSEK in a different project that only the security team can access."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "163",
        "question": "You have data pipelines running on BigQuery, Dataflow, and Dataproc. You need to perform health checks and monitor their behavior, and then notify the team managing the pipelines if they fail. You also need to be able to work across multiple projects. Your preference is to use managed products or features of the platform. What should you do?",
        "options": {
            "A": "Export the information to Cloud Monitoring, and set up an Alerting policy",
            "B": "Run a Virtual Machine in Compute Engine with Airflow, and export the information to Cloud Monitoring",
            "C": "Export the logs to BigQuery, and set up App Engine to read that information and send emails if you find a failure in the logs",
            "D": "Develop an App Engine application to consume logs using GCP API calls, and send emails if you find a failure in the logs"
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "164",
        "question": "You are working on a linear regression model on BigQuery ML to predict a customer's likelihood of purchasing your company's products. Your model uses a city name variable as a key predictive component. In order to train and serve the model, your data must be organized in columns. You want to prepare your data using the least amount of coding while maintaining the predictable variables. What should you do?",
        "options": {
            "A": "Create a new view with BigQuery that does not include a column with city information.",
            "B": "Use SQL in BigQuery to transform the state column using a one-hot encoding method, and make each city a column with binary values.",
            "C": "Use TensorFlow to create a categorical variable with a vocabulary list. Create the vocabulary file and upload that as part of your model to BigQuery ML.",
            "D": "Use Cloud Data Fusion to assign each city to a region that is labeled as 1, 2, 3, 4, or 5, and then use that number to represent the city in the model."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "165",
        "question": "You work for a large bank that operates in locations throughout North America. You are setting up a data storage system that will handle bank account transactions. You require ACID compliance and the ability to access data with SQL. Which solution is appropriate?",
        "options": {
            "A": "Store transaction data in Cloud Spanner. Enable stale reads to reduce latency.",
            "B": "Store transaction in Cloud Spanner. Use locking read-write transactions.",
            "C": "Store transaction data in BigQuery. Disabled the query cache to ensure consistency.",
            "D": "Store transaction data in Cloud SQL. Use a federated query BigQuery for analysis."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "166",
        "question": "A shipping company has live package-tracking data that is sent to an Apache Kafka stream in real time. This is then loaded into BigQuery. Analysts in your company want to query the tracking data in BigQuery to analyze geospatial trends in the lifecycle of a package. The table was originally created with ingest-date partitioning. Over time, the query processing time has increased. You need to implement a change that would improve query performance in BigQuery. What should you do?",
        "options": {
            "A": "Implement clustering in BigQuery on the ingest date column.",
            "B": "Implement clustering in BigQuery on the package-tracking ID column.",
            "C": "Tier older data onto Cloud Storage files and create a BigQuery table using Cloud Storage as an external data source.",
            "D": "Re-create the table using data partitioning on the package delivery date."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "167",
        "question": "Your company currently runs a large on-premises cluster using Spark, Hive, and HDFS in a colocation facility. The cluster is designed to accommodate peak usage on the system; however, many jobs are batch in nature, and usage of the cluster fluctuates quite dramatically. Your company is eager to move to the cloud to reduce the overhead associated with on-premises infrastructure and maintenance and to benefit from the cost savings. They are also hoping to modernize their existing infrastructure to use more serverless offerings in order to take advantage of the cloud. Because of the timing of their contract renewal with the colocation facility, they have only 2 months for their initial migration. How would you recommend they approach their upcoming migration strategy so they can maximize their cost savings in the cloud while still executing the migration in time?",
        "options": {
            "A": "Migrate the workloads to Dataproc plus HDFS; modernize later.",
            "B": "Migrate the workloads to Dataproc plus Cloud Storage; modernize later.",
            "C": "Migrate the Spark workload to Dataproc plus HDFS, and modernize the Hive workload for BigQuery.",
            "D": "Modernize the Spark workload for Dataflow and the Hive workload for BigQuery."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "168",
        "question": "You work for a financial institution that lets customers register online. As new customers register, their user data is sent to Pub/Sub before being ingested into BigQuery. For security reasons, you decide to redact your customers' Government issued Identification Number while allowing customer service representatives to view the original values when necessary. What should you do?",
        "options": {
            "A": "Use BigQuery's built-in AEAD encryption to encrypt the SSN column. Save the keys to a new table that is only viewable by permissioned users.",
            "B": "Use BigQuery column-level security. Set the table permissions so that only members of the Customer Service user group can see the SSN column.",
            "C": "Before loading the data into BigQuery, use Cloud Data Loss Prevention (DLP) to replace input values with a cryptographic hash.",
            "D": "Before loading the data into BigQuery, use Cloud Data Loss Prevention (DLP) to replace input values with a cryptographic format-preserving encryption token."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "169",
        "question": "You are migrating a table to BigQuery and are deciding on the data model. Your table stores information related to purchases made across several store locations and includes information like the time of the transaction, items purchased, the store ID, and the city and state in which the store is located. You frequently query this table to see how many of each item were sold over the past 30 days and to look at purchasing trends by state, city, and individual store. How would you model this table for the best query performance?",
        "options": {
            "A": "Partition by transaction time; cluster by state first, then city, then store ID.",
            "B": "Partition by transaction time; cluster by store ID first, then city, then state.",
            "C": "Top-level cluster by state first, then city, then store ID.",
            "D": "Top-level cluster by store ID first, then city, then state."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "170",
        "question": "You are updating the code for a subscriber to a Pub/Sub feed. You are concerned that upon deployment the subscriber may erroneously acknowledge messages, leading to message loss. Your subscriber is not set up to retain acknowledged messages. What should you do to ensure that you can recover from errors after deployment?",
        "options": {
            "A": "Set up the Pub/Sub emulator on your local machine. Validate the behavior of your new subscriber logic before deploying it to production.",
            "B": "Create a Pub/Sub snapshot before deploying new subscriber code. Use a Seek operation to re-deliver messages that became available after the snapshot was created.",
            "C": "Use Cloud Build for your deployment. If an error occurs after deployment, use a Seek operation to locate a timestamp logged by Cloud Build at the start of the deployment.",
            "D": "Enable dead-lettering on the Pub/Sub topic to capture messages that aren't successfully acknowledged. If an error occurs after deployment, re-deliver any messages captured by the dead-letter queue."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "171",
        "question": "You work for a large real estate firm and are preparing 6 TB of home sales data to be used for machine learning. You will use SQL to transform the data and use BigQuery ML to create a machine learning model. You plan to use the model for predictions against a raw dataset that has not been transformed. How should you set up your workflow in order to prevent skew at prediction time?",
        "options": {
            "A": "When creating your model, use BigQuery's TRANSFORM clause to define preprocessing steps. At prediction time, use BigQuery's ML.EVALUATE clause without specifying any transformations on the raw input data.",
            "B": "When creating your model, use BigQuery's TRANSFORM clause to define preprocessing steps. Before requesting predictions, use a saved query to transform your raw input data, and then use ML.EVALUATE.",
            "C": "Use a BigQuery view to define your preprocessing logic. When creating your model, use the view as your model training data. At prediction time, use BigQuery's ML.EVALUATE clause without specifying any transformations on the raw input data.",
            "D": "Preprocess all data using Dataflow. At prediction time, use BigQuery's ML.EVALUATE clause without specifying any further transformations on the input data."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "172",
        "question": "You are analyzing the price of a company's stock. Every 5 seconds, you need to compute a moving average of the past 30 seconds' worth of data. You are reading data from Pub/Sub and using DataFlow to conduct the analysis. How should you set up your windowed pipeline?",
        "options": {
            "A": "Use a fixed window with a duration of 5 seconds. Emit results by setting the following trigger: AfterProcessingTime.pastFirstElementInPane().plusDelayOf (Duration.standardSeconds(30))",
            "B": "Use a fixed window with a duration of 30 seconds. Emit results by setting the following trigger: AfterWatermark.pastEndOfWindow().plusDelayOf (Duration.standardSeconds(5))",
            "C": "Use a sliding window with a duration of 5 seconds. Emit results by setting the following trigger: AfterProcessingTime.pastFirstElementInPane().plusDelayOf (Duration.standardSeconds(30))",
            "D": "Use a sliding window with a duration of 30 seconds and a period of 5 seconds. Emit results by setting the following trigger: AfterWatermark.pastEndOfWindow ()"
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "173",
        "question": "You are designing a pipeline that publishes application events to a Pub/Sub topic. Although message ordering is not important, you need to be able to aggregate events across disjoint hourly intervals before loading the results to BigQuery for analysis. What technology should you use to process and load this data to BigQuery while ensuring that it will scale with large volumes of events?",
        "options": {
            "A": "Create a Cloud Function to perform the necessary data processing that executes using the Pub/Sub trigger every time a new message is published to the topic.",
            "B": "Schedule a Cloud Function to run hourly, pulling all available messages from the Pub/Sub topic and performing the necessary aggregations.",
            "C": "Schedule a batch Dataflow job to run hourly, pulling all available messages from the Pub/Sub topic and performing the necessary aggregations.",
            "D": "Create a streaming Dataflow job that reads continually from the Pub/Sub topic and performs the necessary aggregations using tumbling windows."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "174",
        "question": "You work for a large financial institution that is planning to use Dialogflow to create a chatbot for the company's mobile app. You have reviewed old chat logs and tagged each conversation for intent based on each customer's stated intention for contacting customer service. About 70% of customer requests are simple requests that are solved within 10 intents. The remaining 30% of inquiries require much longer, more complicated requests. Which intents should you automate first?",
        "options": {
            "A": "Automate the 10 intents that cover 70% of the requests so that live agents can handle more complicated requests.",
            "B": "Automate the more complicated requests first because those require more of the agents' time.",
            "C": "Automate a blend of the shortest and longest intents to be representative of all intents.",
            "D": "Automate intents in places where common words such as 'payment' appear only once so the software isn't confused."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "175",
        "question": "Your company is implementing a data warehouse using BigQuery, and you have been tasked with designing the data model. You move your on-premises sales data warehouse with a star data schema to BigQuery but notice performance issues when querying the data of the past 30 days. Based on Google's recommended practices, what should you do to speed up the query without increasing storage costs?",
        "options": {
            "A": "Denormalize the data.",
            "B": "Shard the data by customer ID.",
            "C": "Materialize the dimensional data in views.",
            "D": "Partition the data by transaction date."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "176",
        "question": "You have uploaded 5 years of log data to Cloud Storage. A user reported that some data points in the log data are outside of their expected ranges, which indicates errors. You need to address this issue and be able to run the process again in the future while keeping the original data for compliance reasons. What should you do?",
        "options": {
            "A": "Import the data from Cloud Storage into BigQuery. Create a new BigQuery table, and skip the rows with errors.",
            "B": "Create a Compute Engine instance and create a new copy of the data in Cloud Storage. Skip the rows with errors.",
            "C": "Create a Dataflow workflow that reads the data from Cloud Storage, checks for values outside the expected range, sets the value to an appropriate default, and writes the updated records to a new dataset in Cloud Storage.",
            "D": "Create a Dataflow workflow that reads the data from Cloud Storage, checks for values outside the expected range, sets the value to an appropriate default, and writes the updated records to the same dataset in Cloud Storage."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "177",
        "question": "You want to rebuild your batch pipeline for structured data on Google Cloud. You are using PySpark to conduct data transformations at scale, but your pipelines are taking over twelve hours to run. To expedite development and pipeline run time, you want to use a serverless tool and SOL syntax. You have already moved your raw data into Cloud Storage. How should you build the pipeline on Google Cloud while meeting speed and processing requirements?",
        "options": {
            "A": "Convert your PySpark commands into SparkSQL queries to transform the data, and then run your pipeline on Dataproc to write the data into BigQuery.",
            "B": "Ingest your data into Cloud SQL, convert your PySpark commands into SparkSQL queries to transform the data, and then use federated quenes from BigQuery for machine learning.",
            "C": "Ingest your data into BigQuery from Cloud Storage, convert your PySpark commands into BigQuery SQL queries to transform the data, and then write the transformations to a new table.",
            "D": "Use Apache Beam Python SDK to build the transformation pipelines, and write the data into BigQuery."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "178",
        "question": "You are testing a Dataflow pipeline to ingest and transform text files. The files are compressed gzip, errors are written to a dead-letter queue, and you are using SideInputs to join data. You noticed that the pipeline is taking longer to complete than expected; what should you do to expedite the Dataflow job?",
        "options": {
            "A": "Switch to compressed Avro files.",
            "B": "Reduce the batch size.",
            "C": "Retry records that throw an error.",
            "D": "Use CoGroupByKey instead of the SideInput."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "179",
        "question": "You are building a real-time prediction engine that streams files, which may contain PII (personal identifiable information) data, into Cloud Storage and eventually into BigQuery. You want to ensure that the sensitive data is masked but still maintains referential integrity, because names and emails are often used as join keys. How should you use the Cloud Data Loss Prevention API (DLP API) to ensure that the PII data is not accessible by unauthorized individuals?",
        "options": {
            "A": "Create a pseudonym by replacing the PII data with cryptogenic tokens, and store the non-tokenized data in a locked-down button.",
            "B": "Redact all PII data, and store a version of the unredacted data in a locked-down bucket.",
            "C": "Scan every table in BigQuery, and mask the data it finds that has PII.",
            "D": "Create a pseudonym by replacing PII data with a cryptographic format-preserving token."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "180",
        "question": "You are migrating an application that tracks library books and information about each book, such as author or year published, from an on-premises data warehouse to BigQuery. In your current relational database, the author information is kept in a separate table and joined to the book information on a common key. Based on Google's recommended practice for schema design, how would you structure the data to ensure optimal speed of queries about the author of each book that has been borrowed?",
        "options": {
            "A": "Keep the schema the same, maintain the different tables for the book and each of the attributes, and query as you are doing today.",
            "B": "Create a table that is wide and includes a column for each attribute, including the author's first name, last name, date of birth, etc.",
            "C": "Create a table that includes information about the books and authors, but nest the author fields inside the author column.",
            "D": "Keep the schema the same, create a view that joins all of the tables, and always query the view."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "181",
        "question": "You need to give new website users a globally unique identifier (GUID) using a service that takes in data points and returns a GUID. This data is sourced from both internal and external systems via HTTP calls that you will make via microservices within your pipeline. There will be tens of thousands of messages per second and that can be multi-threaded. and you worry about the backpressure on the system. How should you design your pipeline to minimize that backpressure?",
        "options": {
            "A": "Call out to the service via HTTP.",
            "B": "Create the pipeline statically in the class definition.",
            "C": "Create a new object in the startBundle method of DoFn.",
            "D": "Batch the job into ten-second increments."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "182",
        "question": "You are migrating your data warehouse to Google Cloud and decommissioning your on-premises data center. Because this is a priority for your company, you know that bandwidth will be made available for the initial data load to the cloud. The files being transferred are not large in number, but each file is 90 GB. Additionally, you want your transactional systems to continually update the warehouse on Google Cloud in real time. What tools should you use to migrate the data and ensure that it continues to write to your warehouse?",
        "options": {
            "A": "Storage Transfer Service for the migration; Pub/Sub and Cloud Data Fusion for the real-time updates",
            "B": "BigQuery Data Transfer Service for the migration; Pub/Sub and Dataproc for the real-time updates",
            "C": "gsutil for the migration; Pub/Sub and Dataflow for the real-time updates",
            "D": "gsutil for both the migration and the real-time updates"
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "183",
        "question": "You are using Bigtable to persist and serve stock market data for each of the major indices. To serve the trading application, you need to access only the most recent stock prices that are streaming in. How should you design your row key and tables to ensure that you can access the data with the simplest query?",
        "options": {
            "A": "Create one unique table for all of the indices, and then use the index and timestamp as the row key design.",
            "B": "Create one unique table for all of the indices, and then use a reverse timestamp as the row key design.",
            "C": "For each index, have a separate table and use a timestamp as the row key design.",
            "D": "For each index, have a separate table and use a reverse timestamp as the row key design."
        },
        "answer": "B",
        "reason": "If you usually retrieve the most recent records first, you can use a reversed timestamp in the row key by subtracting the timestamp from your programming language's maximum value for long integers (in Java, java.lang.Long.MAX_VALUE). With a reversed timestamp, the records will be ordered from most recent to least recent."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "184",
        "question": "You are building a report-only data warehouse where the data is streamed into BigQuery via the streaming API. Following Google's best practices, you have both a staging and a production table for the data. How should you design your data loading to ensure that there is only one master dataset without affecting performance on either the ingestion or reporting pieces?",
        "options": {
            "A": "Have a staging table that is an append-only model, and then update the production table every three hours with the changes written to staging.",
            "B": "Have a staging table that is an append-only model, and then update the production table every ninety minutes with the changes written to staging.",
            "C": "Have a staging table that moves the staged data over to the production table and deletes the contents of the staging table every three hours.",
            "D": "Have a staging table that moves the staged data over to the production table and deletes the contents of the staging table every thirty minutes."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "185",
        "question": "You issue a new batch job to Dataflow. The job starts successfully, processes a few elements, and then suddenly fails and shuts down. You navigate to the Dataflow monitoring interface where you find errors related to a particular DoFn in your pipeline. What is the most likely cause of the errors?",
        "options": {
            "A": "Job validation",
            "B": "Exceptions in worker code",
            "C": "Graph or pipeline construction",
            "D": "Insufficient permissions"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "186",
        "question": "Your new customer has requested daily reports that show their net consumption of Google Cloud compute resources and who used the resources. You need to quickly and efficiently generate these daily reports. What should you do?",
        "options": {
            "A": "Do daily exports of Cloud Logging data to BigQuery. Create views filtering by project, log type, resource, and user.",
            "B": "Filter data in Cloud Logging by project, resource, and user; then export the data in CSV format.",
            "C": "Filter data in Cloud Logging by project, log type, resource, and user, then import the data into BigQuery.",
            "D": "Export Cloud Logging data to Cloud Storage in CSV format. Cleanse the data using Dataprep, filtering by project, resource, and user."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "187",
        "question": "The Development and External teams have the project viewer Identity and Access Management (IAM) role in a folder named Visualization. You want the Development Team to be able to read data from both Cloud Storage and BigQuery, but the External Team should only be able to read data from BigQuery. What should you do?",
        "options": {
            "A": "Remove Cloud Storage IAM permissions to the External Team on the acme-raw-data project.",
            "B": "Create Virtual Private Cloud (VPC) firewall rules on the acme-raw-data project that deny all ingress traffic from the External Team CIDR range.",
            "C": "Create a VPC Service Controls perimeter containing both projects and BigQuery as a restricted API. Add the External Team users to the perimeter's Access Level.",
            "D": "Create a VPC Service Controls perimeter containing both projects and Cloud Storage as a restricted API. Add the Development Team users to the perimeter's Access Level."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "188",
        "question": "Your startup has a web application that currently serves customers out of a single region in Asia. You are targeting funding that will allow your startup to serve customers globally. Your current goal is to optimize for cost, and your post-funding goal is to optimize for global presence and performance. You must use a native JDBC driver. What should you do?",
        "options": {
            "A": "Use Cloud Spanner to configure a single region instance initially, and then configure multi-region Cloud Spanner instances after securing funding.",
            "B": "Use a Cloud SQL for PostgreSQL highly available instance first, and Bigtable with US, Europe, and Asia replication after securing funding.",
            "C": "Use a Cloud SQL for PostgreSQL zonal instance first, and Bigtable with US, Europe, and Asia after securing funding.",
            "D": "Use a Cloud SQL for PostgreSQL zonal instance first, and Cloud SQL for PostgreSQL with highly available configuration after securing funding."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "189",
        "question": "You need to migrate 1 PB of data from an on-premises data center to Google Cloud. Data transfer time during the migration should take only a few hours. You want to follow Google-recommended practices to facilitate the large data transfer over a secure connection. What should you do?",
        "options": {
            "A": "Establish a Cloud Interconnect connection between the on-premises data center and Google Cloud, and then use the Storage Transfer Service.",
            "B": "Use a Transfer Appliance and have engineers manually encrypt, decrypt, and verify the data.",
            "C": "Establish a Cloud VPN connection, start gcloud compute scp jobs in parallel, and run checksums to verify the data.",
            "D": "Reduce the data into 3 TB batches, transfer the data using gsutil, and run checksums to verify the data."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "190",
        "question": "You are loading CSV files from Cloud Storage to BigQuery. The files have known data quality issues, including mismatched data types, such as STRINGs and INT64s in the same column, and inconsistent formatting of values such as phone numbers or addresses. You need to create the data pipeline to maintain data quality and perform the required cleansing and transformation. What should you do?",
        "options": {
            "A": "Use Data Fusion to transform the data before loading it into BigQuery.",
            "B": "Use Data Fusion to convert the CSV files to a self-describing data format, such as AVRO, before loading the data to BigQuery.",
            "C": "Load the CSV files into a staging table with the desired schema, perform the transformations with SQL, and then write the results to the final destination table.",
            "D": "Create a table with the desired schema, load the CSV files into the table, and perform the transformations in place using SQL."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "191",
        "question": "You are developing a new deep learning model that predicts a customer's likelihood to buy on your ecommerce site. After running an evaluation of the model against both the original training data and new test data, you find that your model is overfitting the data. You want to improve the accuracy of the model when predicting new data. What should you do?",
        "options": {
            "A": "Increase the size of the training dataset, and increase the number of input features.",
            "B": "Increase the size of the training dataset, and decrease the number of input features.",
            "C": "Reduce the size of the training dataset, and increase the number of input features.",
            "D": "Reduce the size of the training dataset, and decrease the number of input features."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "192",
        "question": "You are implementing a chatbot to help an online retailer streamline their customer service. The chatbot must be able to respond to both text and voice inquiries. You are looking for a low-code or no-cade option, and you want to be able to easily train the chatbot to provide answers to keywords. What should you do?",
        "options": {
            "A": "Use the Cloud Speech-to-Text API to build a Python application in App Engine.",
            "B": "Use the Cloud Speech-to-Text API to build a Python application in a Compute Engine instance.",
            "C": "Use Dialogflow for simple queries and the Cloud Speech-to-Text API for complex queries.",
            "D": "Use Dialogflow to implement the chatbot, defining the intents based on the most common queries collected."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "193",
        "question": "An aerospace company uses a proprietary data format to store its flight data. You need to connect this new data source to BigQuery and stream the data into BigQuery. You want to efficiently import the data into BigQuery while consuming as few resources as possible. What should you do?",
        "options": {
            "A": "Write a shell script that triggers a Cloud Function that performs periodic ETL batch jobs on the new data source.",
            "B": "Use a standard Dataflow pipeline to store the raw data in BigQuery, and then transform the format later when the data is used.",
            "C": "Use Apache Hive to write a Dataproc job that streams the data into BigQuery in CSV format.",
            "D": "Use an Apache Beam custom connector to write a Dataflow pipeline that streams the data into BigQuery in Avro format."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "194",
        "question": "An online brokerage company requires a high volume trade processing architecture. You need to create a secure queuing system that triggers jobs. The jobs will run in Google Cloud and call the company's Python API to execute trades. You need to efficiently implement a solution. What should you do?",
        "options": {
            "A": "Use a Pub/Sub push subscription to trigger a Cloud Function to pass the data to the Python API.",
            "B": "Write an application hosted on a Compute Engine instance that makes a push subscription to the Pub/Sub topic.",
            "C": "Write an application that makes a queue in a NoSQL database.",
            "D": "Use Cloud Composer to subscribe to a Pub/Sub topic and call the Python API."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "195",
        "question": "Your company wants to be able to retrieve large result sets of medical information from your current system, which has over 10 TBs in the database, and store the data in new tables for further query. The database must have a low-maintenance architecture and be accessible via SQL. You need to implement a cost-effective solution that can support data analytics for large result sets. What should you do?",
        "options": {
            "A": "Use Cloud SQL, but first organize the data into tables. Use JOIN in queries to retrieve data.",
            "B": "Use BigQuery as a data warehouse. Set output destinations for caching large queries.",
            "C": "Use a MySQL cluster installed on a Compute Engine managed instance group for scalability.",
            "D": "Use Cloud Spanner to replicate the data across regions. Normalize the data in a series of tables."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "196",
        "question": "You have 15 TB of data in your on-premises data center that you want to transfer to Google Cloud. Your data changes weekly and is stored in a POSIX-compliant source. The network operations team has granted you 500 Mbps bandwidth to the public internet. You want to follow Google-recommended practices to reliably transfer your data to Google Cloud on a weekly basis. What should you do?",
        "options": {
            "A": "Use Cloud Scheduler to trigger the gsutil command. Use the -m parameter for optimal parallelism.",
            "B": "Use Transfer Appliance to migrate your data into a Google Kubernetes Engine cluster, and then configure a weekly transfer job.",
            "C": "Install Storage Transfer Service for on-premises data in your data center, and then configure a weekly transfer job.",
            "D": "Install Storage Transfer Service for on-premises data on a Google Cloud virtual machine, and then configure a weekly transfer job."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "197",
        "question": "You are designing a system that requires an ACID-compliant database. You must ensure that the system requires minimal human intervention in case of a failure. What should you do?",
        "options": {
            "A": "Configure a Cloud SQL for MySQL instance with point-in-time recovery enabled.",
            "B": "Configure a Cloud SQL for PostgreSQL instance with high availability enabled.",
            "C": "Configure a Bigtable instance with more than one cluster.",
            "D": "Configure a BigQuery table with a multi-region configuration."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "198",
        "question": "You are implementing workflow pipeline scheduling using open source-based tools and Google Kubernetes Engine (GKE). You want to use a Google managed service to simplify and automate the task. You also want to accommodate Shared VPC networking considerations. What should you do?",
        "options": {
            "A": "Use Dataflow for your workflow pipelines. Use Cloud Run triggers for scheduling.",
            "B": "Use Dataflow for your workflow pipelines. Use shell scripts to schedule workflows.",
            "C": "Use Cloud Composer in a Shared VPC configuration. Place the Cloud Composer resources in the host project.",
            "D": "Use Cloud Composer in a Shared VPC configuration. Place the Cloud Composer resources in the service project."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "199",
        "question": "You are using BigQuery and Data Studio to design a customer-facing dashboard that displays large quantities of aggregated data. You expect a high volume of concurrent users. You need to optimize the dashboard to provide quick visualizations with minimal latency. What should you do?",
        "options": {
            "A": "Use BigQuery BI Engine with materialized views.",
            "B": "Use BigQuery BI Engine with logical views.",
            "C": "Use BigQuery BI Engine with streaming data.",
            "D": "Use BigQuery BI Engine with authorized views."
        },
        "answer": "A",
        "reason": "In BigQuery, materialized views are precomputed views that periodically cache the results of a query for increased performance and efficiency. BigQuery leverages precomputed results from materialized views and whenever possible reads only delta changes from the base tables to compute up-to-date results. Materialized views can be queried directly or can be used by the BigQuery optimizer to process queries to the base tables."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "200",
        "question": "Government regulations in the banking industry mandate the protection of clients' personally identifiable information (PII). Your company requires PII to be access controlled, encrypted, and compliant with major data protection standards. In addition to using Cloud Data Loss Prevention (Cloud DLP), you want to follow Google-recommended practices and use service accounts to control access to PII. What should you do?",
        "options": {
            "A": "Assign the required Identity and Access Management (IAM) roles to every employee, and create a single service account to access project resources.",
            "B": "Use one service account to access a Cloud SQL database, and use separate service accounts for each human user.",
            "C": "Use Cloud Storage to comply with major data protection standards. Use one service account shared by all users.",
            "D": "Use Cloud Storage to comply with major data protection standards. Use multiple service accounts attached to IAM groups to grant the appropriate access to each group."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "201",
        "question": "You need to migrate a Redis database from an on-premises data center to a Memorystore for Redis instance. You want to follow Google-recommended practices and perform the migration for minimal cost, time and effort. What should you do?",
        "options": {
            "A": "Make an RDB backup of the Redis database, use the gsutil utility to copy the RDB file into a Cloud Storage bucket, and then import the RDB file into the Memorystore for Redis instance.",
            "B": "Make a secondary instance of the Redis database on a Compute Engine instance and then perform a live cutover.",
            "C": "Create a Dataflow job to read the Redis database from the on-premises data center and write the data to a Memorystore for Redis instance.",
            "D": "Write a shell script to migrate the Redis data and create a new Memorystore for Redis instance."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "202",
        "question": "Your platform on your on-premises environment generates 100 GB of data daily, composed of millions of structured JSON text files. Your on-premises environment cannot be accessed from the public internet. You want to use Google Cloud products to query and explore the platform data. What should you do?",
        "options": {
            "A": "Use Cloud Scheduler to copy data daily from your on-premises environment to Cloud Storage. Use the BigQuery Data Transfer Service to import data into BigQuery.",
            "B": "Use a Transfer Appliance to copy data from your on-premises environment to Cloud Storage. Use the BigQuery Data Transfer Service to import data into BigQuery.",
            "C": "Use Transfer Service for on-premises data to copy data from your on-premises environment to Cloud Storage. Use the BigQuery Data Transfer Service to import data into BigQuery.",
            "D": "Use the BigQuery Data Transfer Service dataset copy to transfer all data into BigQuery."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "203",
        "question": "A TensorFlow machine learning model on Compute Engine virtual machines (n2-standard-32) takes two days to complete training. The model has custom TensorFlow operations that must run partially on a CPU. You want to reduce the training time in a cost-effective manner. What should you do?",
        "options": {
            "A": "Change the VM type to n2-highmem-32.",
            "B": "Change the VM type to e2-standard-32.",
            "C": "Train the model using a VM with a GPU hardware accelerator.",
            "D": "Train the model using a VM with a TPU hardware accelerator."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "204",
        "question": "You want to create a machine learning model using BigQuery ML and create an endpoint for hosting the model using Vertex AI. This will enable the processing of continuous streaming data in near-real time from multiple vendors. The data may contain invalid values. What should you do?",
        "options": {
            "A": "Create a new BigQuery dataset and use streaming inserts to land the data from multiple vendors. Configure your BigQuery ML model to use the \"ingestion\" dataset as the framing data.",
            "B": "Use BigQuery streaming inserts to land the data from multiple vendors where your BigQuery dataset ML model is deployed.",
            "C": "Create a Pub/Sub topic and send all vendor data to it. Connect a Cloud Function to the topic to process the data and store it in BigQuery.",
            "D": "Create a Pub/Sub topic and send all vendor data to it. Use Dataflow to process and sanitize the Pub/Sub data and stream it to BigQuery."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "205",
        "question": "You have a data processing application that runs on Google Kubernetes Engine (GKE). Containers need to be launched with their latest available configurations from a container registry. Your GKE nodes need to have GPUs, local SSDs, and 8 Gbps bandwidth. You want to efficiently provision the data processing infrastructure and manage the deployment process. What should you do?",
        "options": {
            "A": "Use Compute Engine startup scripts to pull container images, and use gcloud commands to provision the infrastructure.",
            "B": "Use Cloud Build to schedule a job using Terraform build to provision the infrastructure and launch with the most current container images.",
            "C": "Use GKE to autoscale containers, and use gcloud commands to provision the infrastructure.",
            "D": "Use Dataflow to provision the data pipeline, and use Cloud Scheduler to run the job."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "206",
        "question": "You need ads data to serve AI models and historical data for analytics. Longtail and outlier data points need to be identified. You want to cleanse the data in near-real time before running it through AI models. What should you do?",
        "options": {
            "A": "Use Cloud Storage as a data warehouse, shell scripts for processing, and BigQuery to create views for desired datasets.",
            "B": "Use Dataflow to identify longtail and outlier data points programmatically, with BigQuery as a sink.",
            "C": "Use BigQuery to ingest, prepare, and then analyze the data, and then run queries to create views.",
            "D": "Use Cloud Composer to identify longtail and outlier data points, and then output a usable dataset to BigQuery."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "207",
        "question": "You are collecting IoT sensor data from millions of devices across the world and storing the data in BigQuery. Your access pattern is based on recent data, filtered by location_id and device_version with the following query:\nYou want to optimize your queries for cost and performance. How should you structure your data?",
        "options": {
            "A": "Partition table data by create_date, location_id, and device_version.",
            "B": "Partition table data by create_date, cluster table data by location_id, and device_version.",
            "C": "Cluster table data by create_date, location_id, and device_version.",
            "D": "Cluster table data by create_date, partition by location_id, and device_version."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "208",
        "question": "A live TV show asks viewers to cast votes using their mobile phones. The event generates a large volume of data during a 3-minute period. You are in charge of the \"Voting infrastructure\" and must ensure that the platform can handle the load and that all votes are processed. You must display partial results while voting is open. After voting closes, you need to count the votes exactly once while optimizing cost. What should you do?",
        "options": {
            "A": "Create a Memorystore instance with a high availability (HA) configuration.",
            "B": "Create a Cloud SQL for PostgreSQL database with high availability (HA) configuration and multiple read replicas.",
            "C": "Write votes to a Pub/Sub topic and have Cloud Functions subscribe to it and write votes to BigQuery.",
            "D": "Write votes to a Pub/Sub topic and load into both Bigtable and BigQuery via a Dataflow pipeline. Query Bigtable for real-time results and BigQuery for later analysis. Shut down the Bigtable instance when voting concludes."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "209",
        "question": "A shipping company has live package-tracking data that is sent to an Apache Kafka stream in real time. This is then loaded into BigQuery. Analysts in your company want to query the tracking data in BigQuery to analyze geospatial trends in the lifecycle of a package. The table was originally created with ingest-date partitioning. Over time, the query processing time has increased. You need to copy all the data to a new clustered table. What should you do?",
        "options": {
            "A": "Re-create the table using data partitioning on the package delivery date.",
            "B": "Implement clustering in BigQuery on the package-tracking ID column.",
            "C": "Implement clustering in BigQuery on the ingest date column.",
            "D": "Tier older data onto Cloud Storage files and create a BigQuery table using Cloud Storage as an external data source."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "210",
        "question": "You are designing a data mesh on Google Cloud with multiple distinct data engineering teams building data products. The typical data curation design pattern consists of landing files in Cloud Storage, transforming raw data in Cloud Storage and BigQuery datasets, and storing the final curated data product in BigQuery datasets. You need to configure Dataplex to ensure that each team can access only the assets needed to build their data products. You also need to ensure that teams can easily share the curated data product. What should you do?",
        "options": {
            "A": "1. Create a single Dataplex virtual lake and create a single zone to contain landing, raw, and curated data.2. Provide each data engineering team access to the virtual lake.",
            "B": "1. Create a single Dataplex virtual lake and create a single zone to contain landing, raw, and curated data.2. Build separate assets for each data product within the zone.3. Assign permissions to the data engineering teams at the zone level.",
            "C": "1. Create a Dataplex virtual lake for each data product, and create a single zone to contain landing, raw, and curated data.2. Provide the data engineering teams with full access to the virtual lake assigned to their data product.",
            "D": "1. Create a Dataplex virtual lake for each data product, and create multiple zones for landing, raw, and curated data.2. Provide the data engineering teams with full access to the virtual lake assigned to their data product."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "211",
        "question": "You are using BigQuery with a multi-region dataset that includes a table with the daily sales volumes. This table is updated multiple times per day. You need to protect your sales table in case of regional failures with a recovery point objective (RPO) of less than 24 hours, while keeping costs to a minimum. What should you do?",
        "options": {
            "A": "Schedule a daily export of the table to a Cloud Storage dual or multi-region bucket.",
            "B": "Schedule a daily copy of the dataset to a backup region.",
            "C": "Schedule a daily BigQuery snapshot of the table.",
            "D": "Modify ETL job to load the data into both the current and another backup region."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "212",
        "question": "You are troubleshooting your Dataflow pipeline that processes data from Cloud Storage to BigQuery. You have discovered that the Dataflow worker nodes cannot communicate with one another. Your networking team relies on Google Cloud network tags to define firewall rules. You need to identify the issue while following Google-recommended networking security practices. What should you do?",
        "options": {
            "A": "Determine whether your Dataflow pipeline has a custom network tag set.",
            "B": "Determine whether there is a firewall rule set to allow traffic on TCP ports 12345 and 12346 for the Dataflow network tag.",
            "C": "Determine whether there is a firewall rule set to allow traffic on TCP ports 12345 and 12346 on the subnet used by Dataflow workers.",
            "D": "Determine whether your Dataflow pipeline is deployed with the external IP address option enabled."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "213",
        "question": "Your company's customer_order table in BigQuery stores the order history for 10 million customers, with a table size of 10 PB. You need to create a dashboard for the support team to view the order history. The dashboard has two filters, country_name and username. Both are string data types in the BigQuery table. When a filter is applied, the dashboard fetches the order history from the table and displays the query results. However, the dashboard is slow to show the results when applying the filters to the following query:\nHow should you redesign the BigQuery table to support faster access?",
        "options": {
            "A": "Cluster the table by country and username fields.",
            "B": "Cluster the table by country field, and partition by username field.",
            "C": "Partition the table by country and username fields.",
            "D": "Partition the table by _PARTITIONTIME."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "214",
        "question": "You have a Standard Tier Memorystore for Redis instance deployed in a production environment. You need to simulate a Redis instance failover in the most accurate disaster recovery situation, and ensure that the failover has no impact on production data. What should you do?",
        "options": {
            "A": "Create a Standard Tier Memorystore for Redis instance in the development environment. Initiate a manual failover by using the limited-data-loss data protection mode.",
            "B": "Create a Standard Tier Memorystore for Redis instance in a development environment. Initiate a manual failover by using the force-data-loss data protection mode.",
            "C": "Increase one replica to Redis instance in production environment. Initiate a manual failover by using the force-data-loss data protection mode.",
            "D": "Initiate a manual failover by using the limited-data-loss data protection mode to the Memorystore for Redis instance in the production environment."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "215",
        "question": "You are administering a BigQuery dataset that uses a customer-managed encryption key (CMEK). You need to share the dataset with a partner organization that does not have access to your CMEK. What should you do?",
        "options": {
            "A": "Provide the partner organization a copy of your CMEKs to decrypt the data.",
            "B": "Export the tables to parquet files to a Cloud Storage bucket and grant the storageinsights.viewer role on the bucket to the partner organization.",
            "C": "Copy the tables you need to share to a dataset without CMEKs. Create an Analytics Hub listing for this dataset.",
            "D": "Create an authorized view that contains the CMEK to decrypt the data when accessed."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "216",
        "question": "You are developing an Apache Beam pipeline to extract data from a Cloud SQL instance by using JdbcIO. You have two projects running in Google Cloud. The pipeline will be deployed and executed on Dataflow in Project A. The Cloud SQL. instance is running in Project B and does not have a public IP address. After deploying the pipeline, you noticed that the pipeline failed to extract data from the Cloud SQL instance due to connection failure. You verified that VPC Service Controls and shared VPC are not in use in these projects. You want to resolve this error while ensuring that the data does not go through the public internet. What should you do?",
        "options": {
            "A": "Set up VPC Network Peering between Project A and Project B. Add a firewall rule to allow the peered subnet range to access all instances on the network.",
            "B": "Turn off the external IP addresses on the Dataflow worker. Enable Cloud NAT in Project A.",
            "C": "Add the external IP addresses of the Dataflow worker as authorized networks in the Cloud SQL instance.",
            "D": "Set up VPC Network Peering between Project A and Project B. Create a Compute Engine instance without external IP address in Project B on the peered subnet to serve as a proxy server to the Cloud SQL database."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "217",
        "question": "You have a BigQuery table that contains customer data, including sensitive information such as names and addresses. You need to share the customer data with your data analytics and consumer support teams securely. The data analytics team needs to access the data of all the customers, but must not be able to access the sensitive data. The consumer support team needs access to all data columns, but must not be able to access customers that no longer have active contracts. You enforced these requirements by using an authorized dataset and policy tags. After implementing these steps, the data analytics team reports that they still have access to the sensitive columns. You need to ensure that the data analytics team does not have access to restricted data. What should you do? (Choose two.)",
        "options": {
            "A": "Create two separate authorized datasets; one for the data analytics team and another for the consumer support team.",
            "B": "Ensure that the data analytics team members do not have the Data Catalog Fine-Grained Reader role for the policy tags.",
            "C": "Replace the authorized dataset with an authorized view. Use row-level security and apply filter_expression to limit data access.",
            "D": "Remove the bigquery.dataViewer role from the data analytics team on the authorized datasets.",
            "E": "Enforce access control in the policy tag taxonomy."
        },
        "answer": "BE",
        "reason": "B - It will ensure they don't have access to secure columns.\nE- It will allow to enforce column level security"
    },
    {
        "topic": "Professional Data Engineer",
        "no": "218",
        "question": "You have a Cloud SQL for PostgreSQL instance in Region\u2019 with one read replica in Region2 and another read replica in Region3. An unexpected event in Region\u2019 requires that you perform disaster recovery by promoting a read replica in Region2. You need to ensure that your application has the same database capacity available before you switch over the connections. What should you do?",
        "options": {
            "A": "Enable zonal high availability on the primary instance. Create a new read replica in a new region.",
            "B": "Create a cascading read replica from the existing read replica in Region3.",
            "C": "Create two new read replicas from the new primary instance, one in Region3 and one in a new region.",
            "D": "Create a new read replica in Region1, promote the new read replica to be the primary instance, and enable zonal high availability."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "219",
        "question": "You orchestrate ETL pipelines by using Cloud Composer. One of the tasks in the Apache Airflow directed acyclic graph (DAG) relies on a third-party service. You want to be notified when the task does not succeed. What should you do?",
        "options": {
            "A": "Assign a function with notification logic to the on_retry_callback parameter for the operator responsible for the task at risk.",
            "B": "Configure a Cloud Monitoring alert on the sla_missed metric associated with the task at risk to trigger a notification.",
            "C": "Assign a function with notification logic to the on_failure_callback parameter tor the operator responsible for the task at risk.",
            "D": "Assign a function with notification logic to the sla_miss_callback parameter for the operator responsible for the task at risk."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "220",
        "question": "You are migrating your on-premises data warehouse to BigQuery. One of the upstream data sources resides on a MySQL. database that runs in your on-premises data center with no public IP addresses. You want to ensure that the data ingestion into BigQuery is done securely and does not go through the public internet. What should you do?",
        "options": {
            "A": "Update your existing on-premises ETL tool to write to BigQuery by using the BigQuery Open Database Connectivity (ODBC) driver. Set up the proxy parameter in the simba.googlebigqueryodbc.ini file to point to your data center\u2019s NAT gateway.",
            "B": "Use Datastream to replicate data from your on-premises MySQL database to BigQuery. Set up Cloud Interconnect between your on-premises data center and Google Cloud. Use Private connectivity as the connectivity method and allocate an IP address range within your VPC network to the Datastream connectivity configuration. Use Server-only as the encryption type when setting up the connection profile in Datastream.",
            "C": "Use Datastream to replicate data from your on-premises MySQL database to BigQuery. Use Forward-SSH tunnel as the connectivity method to establish a secure tunnel between Datastream and your on-premises MySQL database through a tunnel server in your on-premises data center. Use None as the encryption type when setting up the connection profile in Datastream.",
            "D": "Use Datastream to replicate data from your on-premises MySQL database to BigQuery. Gather Datastream public IP addresses of the Google Cloud region that will be used to set up the stream. Add those IP addresses to the firewall allowlist of your on-premises data center. Use IP Allowlisting as the connectivity method and Server-only as the encryption type when setting up the connection profile in Datastream."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "221",
        "question": "You store and analyze your relational data in BigQuery on Google Cloud with all data that resides in US regions. You also have a variety of object stores across Microsoft Azure and Amazon Web Services (AWS), also in US regions. You want to query all your data in BigQuery daily with as little movement of data as possible. What should you do?",
        "options": {
            "A": "Use BigQuery Data Transfer Service to load files from Azure and AWS into BigQuery.",
            "B": "Create a Dataflow pipeline to ingest files from Azure and AWS to BigQuery.",
            "C": "Load files from AWS and Azure to Cloud Storage with Cloud Shell gsutil rsync arguments.",
            "D": "Use the BigQuery Omni functionality and BigLake tables to query files in Azure and AWS."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "222",
        "question": "You have a variety of files in Cloud Storage that your data science team wants to use in their models. Currently, users do not have a method to explore, cleanse, and validate the data in Cloud Storage. You are looking for a low code solution that can be used by your data science team to quickly cleanse and explore data within Cloud Storage. What should you do?",
        "options": {
            "A": "Provide the data science team access to Dataflow to create a pipeline to prepare and validate the raw data and load data into BigQuery for data exploration.",
            "B": "Create an external table in BigQuery and use SQL to transform the data as necessary. Provide the data science team access to the external tables to explore the raw data.",
            "C": "Load the data into BigQuery and use SQL to transform the data as necessary. Provide the data science team access to staging tables to explore the raw data.",
            "D": "Provide the data science team access to Dataprep to prepare, validate, and explore the data within Cloud Storage."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "223",
        "question": "You are building an ELT solution in BigQuery by using Dataform. You need to perform uniqueness and null value checks on your final tables. What should you do to efficiently integrate these checks into your pipeline?",
        "options": {
            "A": "Build BigQuery user-defined functions (UDFs).",
            "B": "Create Dataplex data quality tasks.",
            "C": "Build Dataform assertions into your code.",
            "D": "Write a Spark-based stored procedure."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "224",
        "question": "A web server sends click events to a Pub/Sub topic as messages. The web server includes an eventTimestamp attribute in the messages, which is the time when the click occurred. You have a Dataflow streaming job that reads from this Pub/Sub topic through a subscription, applies some transformations, and writes the result to another Pub/Sub topic for use by the advertising department. The advertising department needs to receive each message within 30 seconds of the corresponding click occurrence, but they report receiving the messages late. Your Dataflow job's system lag is about 5 seconds, and the data freshness is about 40 seconds. Inspecting a few messages show no more than 1 second lag between their eventTimestamp and publishTime. What is the problem and what should you do?",
        "options": {
            "A": "The advertising department is causing delays when consuming the messages. Work with the advertising department to fix this.",
            "B": "Messages in your Dataflow job are taking more than 30 seconds to process. Optimize your job or increase the number of workers to fix this.",
            "G": "Messages in your Dataflow job are processed in less than 30 seconds, but your job cannot keep up with the backlog in the Pub/Sub subscription. Optimize your job or increase the number of workers to fix this.",
            "D": "The web server is not pushing messages fast enough to Pub/Sub. Work with the web server team to fix this."
        },
        "answer": "G",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "225",
        "question": "Your organization stores customer data in an on-premises Apache Hadoop cluster in Apache Parquet format. Data is processed on a daily basis by Apache Spark jobs that run on the cluster. You are migrating the Spark jobs and Parquet data to Google Cloud. BigQuery will be used on future transformation pipelines so you need to ensure that your data is available in BigQuery. You want to use managed services, while minimizing ETL data processing changes and overhead costs. What should you do?",
        "options": {
            "A": "Migrate your data to Cloud Storage and migrate the metadata to Dataproc Metastore (DPMS). Refactor Spark pipelines to write and read data on Cloud Storage, and run them on Dataproc Serverless.",
            "B": "Migrate your data to Cloud Storage and register the bucket as a Dataplex asset. Refactor Spark pipelines to write and read data on Cloud Storage, and run them on Dataproc Serverless.",
            "C": "Migrate your data to BigQuery. Refactor Spark pipelines to write and read data on BigQuery, and run them on Dataproc Serverless.",
            "D": "Migrate your data to BigLake. Refactor Spark pipelines to write and read data on Cloud Storage, and run them on Dataproc on Compute Engine."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "226",
        "question": "Your organization has two Google Cloud projects, project A and project B. In project A, you have a Pub/Sub topic that receives data from confidential sources. Only the resources in project A should be able to access the data in that topic. You want to ensure that project B and any future project cannot access data in the project A topic. What should you do?",
        "options": {
            "A": "Add firewall rules in project A so only traffic from the VPC in project A is permitted.",
            "B": "Configure VPC Service Controls in the organization with a perimeter around project A.",
            "C": "Use Identity and Access Management conditions to ensure that only users and service accounts in project A. can access resources in project A.",
            "D": "Configure VPC Service Controls in the organization with a perimeter around the VPC of project A."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "227",
        "question": "You stream order data by using a Dataflow pipeline, and write the aggregated result to Memorystore. You provisioned a Memorystore for Redis instance with Basic Tier, 4 GB capacity, which is used by 40 clients for read-only access. You are expecting the number of read-only clients to increase significantly to a few hundred and you need to be able to support the demand. You want to ensure that read and write access availability is not impacted, and any changes you make can be deployed quickly. What should you do?",
        "options": {
            "A": "Create a new Memorystore for Redis instance with Standard Tier. Set capacity to 4 GB and read replica to No read replicas (high availability only). Delete the old instance.",
            "B": "Create a new Memorystore for Redis instance with Standard Tier. Set capacity to 5 GB and create multiple read replicas. Delete the old instance.",
            "C": "Create a new Memorystore for Memcached instance. Set a minimum of three nodes, and memory per node to 4 GB. Modify the Dataflow pipeline and all clients to use the Memcached instance. Delete the old instance.",
            "D": "Create multiple new Memorystore for Redis instances with Basic Tier (4 GB capacity). Modify the Dataflow pipeline and new clients to use all instances."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "228",
        "question": "You have a streaming pipeline that ingests data from Pub/Sub in production. You need to update this streaming pipeline with improved business logic. You need to ensure that the updated pipeline reprocesses the previous two days of delivered Pub/Sub messages. What should you do? (Choose two.)",
        "options": {
            "A": "Use the Pub/Sub subscription clear-retry-policy flag",
            "B": "Use Pub/Sub Snapshot capture two days before the deployment.",
            "C": "Create a new Pub/Sub subscription two days before the deployment.",
            "D": "Use the Pub/Sub subscription retain-acked-messages flag.",
            "E": "Use Pub/Sub Seek with a timestamp."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "229",
        "question": "You currently use a SQL-based tool to visualize your data stored in BigQuery. The data visualizations require the use of outer joins and analytic functions. Visualizations must be based on data that is no less than 4 hours old. Business users are complaining that the visualizations are too slow to generate. You want to improve the performance of the visualization queries while minimizing the maintenance overhead of the data preparation pipeline. What should you do?",
        "options": {
            "A": "Create materialized views with the allow_non_incremental_definition option set to true for the visualization queries. Specify the max_staleness parameter to 4 hours and the enable_refresh parameter to true. Reference the materialized views in the data visualization tool.",
            "B": "Create views for the visualization queries. Reference the views in the data visualization tool.",
            "C": "Create a Cloud Function instance to export the visualization query results as parquet files to a Cloud Storage bucket. Use Cloud Scheduler to trigger the Cloud Function every 4 hours. Reference the parquet files in the data visualization tool.",
            "D": "Create materialized views for the visualization queries. Use the incremental updates capability of BigQuery materialized views to handle changed data automatically. Reference the materialized views in the data visualization tool."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "230",
        "question": "You need to modernize your existing on-premises data strategy. Your organization currently uses:\n\u2022\tApache Hadoop clusters for processing multiple large data sets, including on-premises Hadoop Distributed File System (HDFS) for data replication.\n\u2022\tApache Airflow to orchestrate hundreds of ETL pipelines with thousands of job steps.\nYou need to set up a new architecture in Google Cloud that can handle your Hadoop workloads and requires minimal changes to your existing orchestration processes. What should you do?",
        "options": {
            "A": "Use Bigtable for your large workloads, with connections to Cloud Storage to handle any HDFS use cases. Orchestrate your pipelines with Cloud Composer.",
            "B": "Use Dataproc to migrate Hadoop clusters to Google Cloud, and Cloud Storage to handle any HDFS use cases. Orchestrate your pipelines with Cloud Composer.",
            "C": "Use Dataproc to migrate Hadoop clusters to Google Cloud, and Cloud Storage to handle any HDFS use cases. Convert your ETL pipelines to Dataflow.",
            "D": "Use Dataproc to migrate your Hadoop clusters to Google Cloud, and Cloud Storage to handle any HDFS use cases. Use Cloud Data Fusion to visually design and deploy your ETL pipelines."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "231",
        "question": "You recently deployed several data processing jobs into your Cloud Composer 2 environment. You notice that some tasks are failing in Apache Airflow. On the monitoring dashboard, you see an increase in the total workers memory usage, and there were worker pod evictions. You need to resolve these errors. What should you do? (Choose two.)",
        "options": {
            "A": "Increase the directed acyclic graph (DAG) file parsing interval.",
            "B": "Increase the Cloud Composer 2 environment size from medium to large.",
            "C": "Increase the maximum number of workers and reduce worker concurrency.",
            "D": "Increase the memory available to the Airflow workers.",
            "E": "Increase the memory available to the Airflow triggerer."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "232",
        "question": "You are on the data governance team and are implementing security requirements to deploy resources. You need to ensure that resources are limited to only the europe-west3 region. You want to follow Google-recommended practices.\nWhat should you do?",
        "options": {
            "A": "Set the constraints/gcp.resourceLocations organization policy constraint to in:europe-west3-locations.",
            "B": "Deploy resources with Terraform and implement a variable validation rule to ensure that the region is set to the europe-west3 region for all resources.",
            "C": "Set the constraints/gcp.resourceLocations organization policy constraint to in:eu-locations.",
            "D": "Create a Cloud Function to monitor all resources created and automatically destroy the ones created outside the europe-west3 region."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "233",
        "question": "You are a BigQuery admin supporting a team of data consumers who run ad hoc queries and downstream reporting in tools such as Looker. All data and users are combined under a single organizational project. You recently noticed some slowness in query results and want to troubleshoot where the slowdowns are occurring. You think that there might be some job queuing or slot contention occurring as users run jobs, which slows down access to results. You need to investigate the query job information and determine where performance is being affected. What should you do?",
        "options": {
            "A": "Use slot reservations for your project to ensure that you have enough query processing capacity and are able to allocate available slots to the slower queries.",
            "B": "Use Cloud Monitoring to view BigQuery metrics and set up alerts that let you know when a certain percentage of slots were used.",
            "C": "Use available administrative resource charts to determine how slots are being used and how jobs are performing over time. Run a query on the INFORMATION_SCHEMA to review query performance.",
            "D": "Use Cloud Logging to determine if any users or downstream consumers are changing or deleting access grants on tagged resources."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "234",
        "question": "You migrated a data backend for an application that serves 10 PB of historical product data for analytics. Only the last known state for a product, which is about 10 GB of data, needs to be served through an API to the other applications. You need to choose a cost-effective persistent storage solution that can accommodate the analytics requirements and the API performance of up to 1000 queries per second (QPS) with less than 1 second latency. What should you do?",
        "options": {
            "A": "1. Store the historical data in BigQuery for analytics.2. Use a materialized view to precompute the last state of a product.3. Serve the last state data directly from BigQuery to the API.",
            "B": "1. Store the products as a collection in Firestore with each product having a set of historical changes.2. Use simple and compound queries for analytics.3. Serve the last state data directly from Firestore to the API.",
            "C": "1. Store the historical data in Cloud SQL for analytics.2. In a separate table, store the last state of the product after every product change.3. Serve the last state data directly from Cloud SQL to the API.",
            "D": "1. Store the historical data in BigQuery for analytics.2. In a Cloud SQL table, store the last state of the product after every product change.3. Serve the last state data directly from Cloud SQL to the API."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "235",
        "question": "You want to schedule a number of sequential load and transformation jobs. Data files will be added to a Cloud Storage bucket by an upstream process. There is no fixed schedule for when the new data arrives. Next, a Dataproc job is triggered to perform some transformations and write the data to BigQuery. You then need to run additional transformation jobs in BigQuery. The transformation jobs are different for every table. These jobs might take hours to complete. You need to determine the most efficient and maintainable workflow to process hundreds of tables and provide the freshest data to your end users. What should you do?",
        "options": {
            "A": "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Cloud Storage, Dataproc, and BigQuery operators.2. Use a single shared DAG for all tables that need to go through the pipeline.3. Schedule the DAG to run hourly.",
            "B": "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Cloud Storage, Dataproc, and BigQuery operators.2. Create a separate DAG for each table that needs to go through the pipeline.3. Schedule the DAGs to run hourly.",
            "C": "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Dataproc and BigQuery operators.2. Use a single shared DAG for all tables that need to go through the pipeline.3. Use a Cloud Storage object trigger to launch a Cloud Function that triggers the DAG.",
            "D": "1. Create an Apache Airflow directed acyclic graph (DAG) in Cloud Composer with sequential tasks by using the Dataproc and BigQuery operators.2. Create a separate DAG for each table that needs to go through the pipeline.3. Use a Cloud Storage object trigger to launch a Cloud Function that triggers the DAG."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "236",
        "question": "You are deploying a MySQL database workload onto Cloud SQL. The database must be able to scale up to support several readers from various geographic regions. The database must be highly available and meet low RTO and RPO requirements, even in the event of a regional outage. You need to ensure that interruptions to the readers are minimal during a database failover. What should you do?",
        "options": {
            "A": "Create a highly available Cloud SQL instance in region Create a highly available read replica in region B. Scale up read workloads by creating cascading read replicas in multiple regions. Backup the Cloud SQL instances to a multi-regional Cloud Storage bucket. Restore the Cloud SQL backup to a new instance in another region when Region A is down.",
            "B": "Create a highly available Cloud SQL instance in region A. Scale up read workloads by creating read replicas in multiple regions. Promote one of the read replicas when region A is down.",
            "C": "Create a highly available Cloud SQL instance in region A. Create a highly available read replica in region B. Scale up read workloads by creating cascading read replicas in multiple regions. Promote the read replica in region B when region A is down.",
            "D": "Create a highly available Cloud SQL instance in region A. Scale up read workloads by creating read replicas in the same region. Failover to the standby Cloud SQL instance when the primary instance fails."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "237",
        "question": "You are planning to load some of your existing on-premises data into BigQuery on Google Cloud. You want to either stream or batch-load data, depending on your use case. Additionally, you want to mask some sensitive data before loading into BigQuery. You need to do this in a programmatic way while keeping costs to a minimum. What should you do?",
        "options": {
            "A": "Use Cloud Data Fusion to design your pipeline, use the Cloud DLP plug-in to de-identify data within your pipeline, and then move the data into BigQuery.",
            "B": "Use the BigQuery Data Transfer Service to schedule your migration. After the data is populated in BigQuery, use the connection to the Cloud Data Loss Prevention (Cloud DLP) API to de-identify the necessary data.",
            "C": "Create your pipeline with Dataflow through the Apache Beam SDK for Python, customizing separate options within your code for streaming, batch processing, and Cloud DLP. Select BigQuery as your data sink.",
            "D": "Set up Datastream to replicate your on-premise data on BigQuery."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "238",
        "question": "You want to encrypt the customer data stored in BigQuery. You need to implement per-user crypto-deletion on data stored in your tables. You want to adopt native features in Google Cloud to avoid custom solutions. What should you do?",
        "options": {
            "A": "Implement Authenticated Encryption with Associated Data (AEAD) BigQuery functions while storing your data in BigQuery.",
            "B": "Create a customer-managed encryption key (CMEK) in Cloud KMS. Associate the key to the table while creating the table.",
            "C": "Create a customer-managed encryption key (CMEK) in Cloud KMS. Use the key to encrypt data before storing in BigQuery.",
            "D": "Encrypt your data during ingestion by using a cryptographic library supported by your ETL pipeline."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "239",
        "question": "The data analyst team at your company uses BigQuery for ad-hoc queries and scheduled SQL pipelines in a Google Cloud project with a slot reservation of 2000 slots. However, with the recent introduction of hundreds of new non time-sensitive SQL pipelines, the team is encountering frequent quota errors. You examine the logs and notice that approximately 1500 queries are being triggered concurrently during peak time. You need to resolve the concurrency issue. What should you do?",
        "options": {
            "A": "Increase the slot capacity of the project with baseline as 0 and maximum reservation size as 3000.",
            "B": "Update SQL pipelines to run as a batch query, and run ad-hoc queries as interactive query jobs.",
            "C": "Increase the slot capacity of the project with baseline as 2000 and maximum reservation size as 3000.",
            "D": "Update SQL pipelines and ad-hoc queries to run as interactive query jobs."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "240",
        "question": "You are designing a data mesh on Google Cloud by using Dataplex to manage data in BigQuery and Cloud Storage. You want to simplify data asset permissions. You are creating a customer virtual lake with two user groups:\n\u2022\tData engineers, which require full data lake access\n\u2022\tAnalytic users, which require access to curated data\nYou need to assign access rights to these two groups. What should you do?",
        "options": {
            "A": "1. Grant the dataplex.dataOwner role to the data engineer group on the customer data lake.2. Grant the dataplex.dataReader role to the analytic user group on the customer curated zone.",
            "B": "1. Grant the dataplex.dataReader role to the data engineer group on the customer data lake.2. Grant the dataplex.dataOwner to the analytic user group on the customer curated zone.",
            "C": "1. Grant the bigquery.dataOwner role on BigQuery datasets and the storage.objectCreator role on Cloud Storage buckets to data engineers.2. Grant the bigquery.dataViewer role on BigQuery datasets and the storage.objectViewer role on Cloud Storage buckets to analytic users.",
            "D": "1. Grant the bigquery.dataViewer role on BigQuery datasets and the storage.objectViewer role on Cloud Storage buckets to data engineers.2. Grant the bigquery.dataOwner role on BigQuery datasets and the storage.objectEditor role on Cloud Storage buckets to analytic users."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "241",
        "question": "You are designing the architecture of your application to store data in Cloud Storage. Your application consists of pipelines that read data from a Cloud Storage bucket that contains raw data, and write the data to a second bucket after processing. You want to design an architecture with Cloud Storage resources that are capable of being resilient if a Google Cloud regional failure occurs. You want to minimize the recovery point objective (RPO) if a failure occurs, with no impact on applications that use the stored data. What should you do?",
        "options": {
            "A": "Adopt multi-regional Cloud Storage buckets in your architecture.",
            "B": "Adopt two regional Cloud Storage buckets, and update your application to write the output on both buckets.",
            "C": "Adopt a dual-region Cloud Storage bucket, and enable turbo replication in your architecture.",
            "D": "Adopt two regional Cloud Storage buckets, and create a daily task to copy from one bucket to the other."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "242",
        "question": "You have designed an Apache Beam processing pipeline that reads from a Pub/Sub topic. The topic has a message retention duration of one day, and writes to a Cloud Storage bucket. You need to select a bucket location and processing strategy to prevent data loss in case of a regional outage with an RPO of 15 minutes. What should you do?",
        "options": {
            "A": "1. Use a dual-region Cloud Storage bucket.2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs.3. Seek the subscription back in time by 15 minutes to recover the acknowledged messages.4. Start the Dataflow job in a secondary region.",
            "B": "1. Use a multi-regional Cloud Storage bucket.2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs.3. Seek the subscription back in time by 60 minutes to recover the acknowledged messages.4. Start the Dataflow job in a secondary region.",
            "C": "1. Use a regional Cloud Storage bucket.2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs.3. Seek the subscription back in time by one day to recover the acknowledged messages.4. Start the Dataflow job in a secondary region and write in a bucket in the same region.",
            "D": "1. Use a dual-region Cloud Storage bucket with turbo replication enabled.2. Monitor Dataflow metrics with Cloud Monitoring to determine when an outage occurs.3. Seek the subscription back in time by 60 minutes to recover the acknowledged messages.4. Start the Dataflow job in a secondary region."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "243",
        "question": "You are preparing data that your machine learning team will use to train a model using BigQueryML. They want to predict the price per square foot of real estate. The training data has a column for the price and a column for the number of square feet. Another feature column called \u2018feature1\u2019 contains null values due to missing data. You want to replace the nulls with zeros to keep more data points. Which query should you use?",
        "options": {
            "A": "",
            "B": "",
            "C": "",
            "D": ""
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "244",
        "question": "Different teams in your organization store customer and performance data in BigQuery. Each team needs to keep full control of their collected data, be able to query data within their projects, and be able to exchange their data with other teams. You need to implement an organization-wide solution, while minimizing operational tasks and costs. What should you do?",
        "options": {
            "A": "Ask each team to create authorized views of their data. Grant the biquery.jobUser role to each team.",
            "B": "Create a BigQuery scheduled query to replicate all customer data into team projects.",
            "C": "Ask each team to publish their data in Analytics Hub. Direct the other teams to subscribe to them.",
            "D": "Enable each team to create materialized views of the data they need to access in their projects."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "245",
        "question": "You are developing a model to identify the factors that lead to sales conversions for your customers. You have completed processing your data. You want to continue through the model development lifecycle. What should you do next?",
        "options": {
            "A": "Use your model to run predictions on fresh customer input data.",
            "B": "Monitor your model performance, and make any adjustments needed.",
            "C": "Delineate what data will be used for testing and what will be used for training the model.",
            "D": "Test and evaluate your model on your curated data to determine how well the model performs."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "246",
        "question": "You have one BigQuery dataset which includes customers\u2019 street addresses. You want to retrieve all occurrences of street addresses from the dataset. What should you do?",
        "options": {
            "A": "Write a SQL query in BigQuery by using REGEXP_CONTAINS on all tables in your dataset to find rows where the word \u201cstreet\u201d appears.",
            "B": "Create a deep inspection job on each table in your dataset with Cloud Data Loss Prevention and create an inspection template that includes the STREET_ADDRESS infoType.",
            "C": "Create a discovery scan configuration on your organization with Cloud Data Loss Prevention and create an inspection template that includes the STREET_ADDRESS infoType.",
            "D": "Create a de-identification job in Cloud Data Loss Prevention and use the masking transformation."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "247",
        "question": "Your company operates in three domains: airlines, hotels, and ride-hailing services. Each domain has two teams: analytics and data science, which create data assets in BigQuery with the help of a central data platform team. However, as each domain is evolving rapidly, the central data platform team is becoming a bottleneck. This is causing delays in deriving insights from data, and resulting in stale data when pipelines are not kept up to date. You need to design a data mesh architecture by using Dataplex to eliminate the bottleneck. What should you do?",
        "options": {
            "A": "1. Create one lake for each team. Inside each lake, create one zone for each domain.2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone.3. Have the central data platform team manage all zones\u2019 data assets.",
            "B": "1. Create one lake for each team. Inside each lake, create one zone for each domain.2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone.3. Direct each domain to manage their own zone\u2019s data assets.",
            "C": "1. Create one lake for each domain. Inside each lake, create one zone for each team.2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone.3. Direct each domain to manage their own lake\u2019s data assets.",
            "D": "1. Create one lake for each domain. Inside each lake, create one zone for each team.2. Attach each of the BigQuery datasets created by the individual teams as assets to the respective zone.3. Have the central data platform team manage all lakes\u2019 data assets."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "248",
        "question": "dataset.inventory_vm sample records:\nYou have an inventory of VM data stored in the BigQuery table. You want to prepare the data for regular reporting in the most cost-effective way. You need to exclude VM rows with fewer than 8 vCPU in your report. What should you do?",
        "options": {
            "A": "Create a view with a filter to drop rows with fewer than 8 vCPU, and use the UNNEST operator.",
            "B": "Create a materialized view with a filter to drop rows with fewer than 8 vCPU, and use the WITH common table expression.",
            "C": "Create a view with a filter to drop rows with fewer than 8 vCPU, and use the WITH common table expression.",
            "D": "Use Dataflow to batch process and write the result to another BigQuery table."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "249",
        "question": "Your team is building a data lake platform on Google Cloud. As a part of the data foundation design, you are planning to store all the raw data in Cloud Storage. You are expecting to ingest approximately 25 GB of data a day and your billing department is worried about the increasing cost of storing old data. The current business requirements are:\n\u2022\tThe old data can be deleted anytime.\n\u2022\tThere is no predefined access pattern of the old data.\n\u2022\tThe old data should be available instantly when accessed.\n\u2022\tThere should not be any charges for data retrieval.\nWhat should you do to optimize for cost?",
        "options": {
            "A": "Create the bucket with the Autoclass storage class feature.",
            "B": "Create an Object Lifecycle Management policy to modify the storage class for data older than 30 days to nearline, 90 days to coldline, and 365 days to archive storage class. Delete old data as needed.",
            "C": "Create an Object Lifecycle Management policy to modify the storage class for data older than 30 days to coldline, 90 days to nearline, and 365 days to archive storage class. Delete old data as needed.",
            "D": "Create an Object Lifecycle Management policy to modify the storage class for data older than 30 days to nearline, 45 days to coldline, and 60 days to archive storage class. Delete old data as needed."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "250",
        "question": "Your company's data platform ingests CSV file dumps of booking and user profile data from upstream sources into Cloud Storage. The data analyst team wants to join these datasets on the email field available in both the datasets to perform analysis. However, personally identifiable information (PII) should not be accessible to the analysts. You need to de-identify the email field in both the datasets before loading them into BigQuery for analysts. What should you do?",
        "options": {
            "A": "1. Create a pipeline to de-identify the email field by using recordTransformations in Cloud Data Loss Prevention (Cloud DLP) with masking as the de-identification transformations type.2. Load the booking and user profile data into a BigQuery table.",
            "B": "1. Create a pipeline to de-identify the email field by using recordTransformations in Cloud DLP with format-preserving encryption with FFX as the de-identification transformation type.2. Load the booking and user profile data into a BigQuery table.",
            "C": "1. Load the CSV files from Cloud Storage into a BigQuery table, and enable dynamic data masking.2. Create a policy tag with the email mask as the data masking rule.3. Assign the policy to the email field in both tables. A4. Assign the Identity and Access Management bigquerydatapolicy.maskedReader role for the BigQuery tables to the analysts.",
            "D": "1. Load the CSV files from Cloud Storage into a BigQuery table, and enable dynamic data masking.2. Create a policy tag with the default masking value as the data masking rule.3. Assign the policy to the email field in both tables.4. Assign the Identity and Access Management bigquerydatapolicy.maskedReader role for the BigQuery tables to the analysts"
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "251",
        "question": "You have important legal hold documents in a Cloud Storage bucket. You need to ensure that these documents are not deleted or modified. What should you do?",
        "options": {
            "A": "Set a retention policy. Lock the retention policy.",
            "B": "Set a retention policy. Set the default storage class to Archive for long-term digital preservation.",
            "C": "Enable the Object Versioning feature. Add a lifecycle rule.",
            "D": "Enable the Object Versioning feature. Create a copy in a bucket in a different region."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "252",
        "question": "You are designing a data warehouse in BigQuery to analyze sales data for a telecommunication service provider. You need to create a data model for customers, products, and subscriptions. All customers, products, and subscriptions can be updated monthly, but you must maintain a historical record of all data. You plan to use the visualization layer for current and historical reporting. You need to ensure that the data model is simple, easy-to-use, and cost-effective. What should you do?",
        "options": {
            "A": "Create a normalized model with tables for each entity. Use snapshots before updates to track historical data.",
            "B": "Create a normalized model with tables for each entity. Keep all input files in a Cloud Storage bucket to track historical data.",
            "C": "Create a denormalized model with nested and repeated fields. Update the table and use snapshots to track historical data.",
            "D": "Create a denormalized, append-only model with nested and repeated fields. Use the ingestion timestamp to track historical data."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "253",
        "question": "You are deploying a batch pipeline in Dataflow. This pipeline reads data from Cloud Storage, transforms the data, and then writes the data into BigQuery. The security team has enabled an organizational constraint in Google Cloud, requiring all Compute Engine instances to use only internal IP addresses and no external IP addresses. What should you do?",
        "options": {
            "A": "Ensure that your workers have network tags to access Cloud Storage and BigQuery. Use Dataflow with only internal IP addresses.",
            "B": "Ensure that the firewall rules allow access to Cloud Storage and BigQuery. Use Dataflow with only internal IPs.",
            "C": "Create a VPC Service Controls perimeter that contains the VPC network and add Dataflow, Cloud Storage, and BigQuery as allowed services in the perimeter. Use Dataflow with only internal IP addresses.",
            "D": "Ensure that Private Google Access is enabled in the subnetwork. Use Dataflow with only internal IP addresses."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "254",
        "question": "You are running a Dataflow streaming pipeline, with Streaming Engine and Horizontal Autoscaling enabled. You have set the maximum number of workers to 1000. The input of your pipeline is Pub/Sub messages with notifications from Cloud Storage. One of the pipeline transforms reads CSV files and emits an element for every CSV line. The job performance is low, the pipeline is using only 10 workers, and you notice that the autoscaler is not spinning up additional workers. What should you do to improve performance?",
        "options": {
            "A": "Enable Vertical Autoscaling to let the pipeline use larger workers.",
            "B": "Change the pipeline code, and introduce a Reshuffle step to prevent fusion.",
            "C": "Update the job to increase the maximum number of workers.",
            "D": "Use Dataflow Prime, and enable Right Fitting to increase the worker resources."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "255",
        "question": "You have an Oracle database deployed in a VM as part of a Virtual Private Cloud (VPC) network. You want to replicate and continuously synchronize 50 tables to BigQuery. You want to minimize the need to manage infrastructure. What should you do?",
        "options": {
            "A": "Deploy Apache Kafka in the same VPC network, use Kafka Connect Oracle Change Data Capture (CDC), and Dataflow to stream the Kafka topic to BigQuery.",
            "B": "Create a Pub/Sub subscription to write to BigQuery directly. Deploy the Debezium Oracle connector to capture changes in the Oracle database, and sink to the Pub/Sub topic.",
            "C": "Deploy Apache Kafka in the same VPC network, use Kafka Connect Oracle change data capture (CDC), and the Kafka Connect Google BigQuery Sink Connector.",
            "D": "Create a Datastream service from Oracle to BigQuery, use a private connectivity configuration to the same VPC network, and a connection profile to BigQuery."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "256",
        "question": "You are deploying an Apache Airflow directed acyclic graph (DAG) in a Cloud Composer 2 instance. You have incoming files in a Cloud Storage bucket that the DAG processes, one file at a time. The Cloud Composer instance is deployed in a subnetwork with no Internet access. Instead of running the DAG based on a schedule, you want to run the DAG in a reactive way every time a new file is received. What should you do?",
        "options": {
            "A": "1. Enable Private Google Access in the subnetwork, and set up Cloud Storage notifications to a Pub/Sub topic.2. Create a push subscription that points to the web server URL.",
            "B": "1. Enable the Cloud Composer API, and set up Cloud Storage notifications to trigger a Cloud Function.2. Write a Cloud Function instance to call the DAG by using the Cloud Composer API and the web server URL.3. Use VPC Serverless Access to reach the web server URL.",
            "C": "1. Enable the Airflow REST API, and set up Cloud Storage notifications to trigger a Cloud Function instance.2. Create a Private Service Connect (PSC) endpoint.3. Write a Cloud Function that connects to the Cloud Composer cluster through the PSC endpoint.",
            "D": "1. Enable the Airflow REST API, and set up Cloud Storage notifications to trigger a Cloud Function instance.2. Write a Cloud Function instance to call the DAG by using the Airflow REST API and the web server URL.3. Use VPC Serverless Access to reach the web server URL."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "257",
        "question": "You are planning to use Cloud Storage as part of your data lake solution. The Cloud Storage bucket will contain objects ingested from external systems. Each object will be ingested once, and the access patterns of individual objects will be random. You want to minimize the cost of storing and retrieving these objects. You want to ensure that any cost optimization efforts are transparent to the users and applications. What should you do?",
        "options": {
            "A": "Create a Cloud Storage bucket with Autoclass enabled.",
            "B": "Create a Cloud Storage bucket with an Object Lifecycle Management policy to transition objects from Standard to Coldline storage class if an object age reaches 30 days.",
            "C": "Create a Cloud Storage bucket with an Object Lifecycle Management policy to transition objects from Standard to Coldline storage class if an object is not live.",
            "D": "Create two Cloud Storage buckets. Use the Standard storage class for the first bucket, and use the Coldline storage class for the second bucket. Migrate objects from the first bucket to the second bucket after 30 days."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "258",
        "question": "You have several different file type data sources, such as Apache Parquet and CSV. You want to store the data in Cloud Storage. You need to set up an object sink for your data that allows you to use your own encryption keys. You want to use a GUI-based solution. What should you do?",
        "options": {
            "A": "Use Storage Transfer Service to move files into Cloud Storage.",
            "B": "Use Cloud Data Fusion to move files into Cloud Storage.",
            "C": "Use Dataflow to move files into Cloud Storage.",
            "D": "Use BigQuery Data Transfer Service to move files into BigQuery."
        },
        "answer": "B",
        "reason": "Cloud Data Fusion is a fully managed, code-free, GUI-based data integration service that allows you to visually connect, transform, and move data between various sources and sinks. - It supports various file formats and can write to Cloud Storage."
    },
    {
        "topic": "Professional Data Engineer",
        "no": "259",
        "question": "Your business users need a way to clean and prepare data before using the data for analysis. Your business users are less technically savvy and prefer to work with graphical user interfaces to define their transformations. After the data has been transformed, the business users want to perform their analysis directly in a spreadsheet. You need to recommend a solution that they can use. What should you do?",
        "options": {
            "A": "Use Dataprep to clean the data, and write the results to BigQuery. Analyze the data by using Connected Sheets.",
            "B": "Use Dataprep to clean the data, and write the results to BigQuery. Analyze the data by using Looker Studio.",
            "C": "Use Dataflow to clean the data, and write the results to BigQuery. Analyze the data by using Connected Sheets.",
            "D": "Use Dataflow to clean the data, and write the results to BigQuery. Analyze the data by using Looker Studio."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "260",
        "question": "You have two projects where you run BigQuery jobs:\n\u2022\tOne project runs production jobs that have strict completion time SLAs. These are high priority jobs that must have the required compute resources available when needed. These jobs generally never go below a 300 slot utilization, but occasionally spike up an additional 500 slots.\n\u2022\tThe other project is for users to run ad-hoc analytical queries. This project generally never uses more than 200 slots at a time. You want these ad-hoc queries to be billed based on how much data users scan rather than by slot capacity.\nYou need to ensure that both projects have the appropriate compute resources available. What should you do?",
        "options": {
            "A": "Create a single Enterprise Edition reservation for both projects. Set a baseline of 300 slots. Enable autoscaling up to 700 slots.",
            "B": "Create two reservations, one for each of the projects. For the SLA project, use an Enterprise Edition with a baseline of 300 slots and enable autoscaling up to 500 slots. For the ad-hoc project, configure on-demand billing.",
            "C": "Create two Enterprise Edition reservations, one for each of the projects. For the SLA project, set a baseline of 300 slots and enable autoscaling up to 500 slots. For the ad-hoc project, set a reservation baseline of 0 slots and set the ignore idle slots flag to False.",
            "D": "Create two Enterprise Edition reservations, one for each of the projects. For the SLA project, set a baseline of 800 slots. For the ad-hoc project, enable autoscaling up to 200 slots."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "261",
        "question": "You want to migrate your existing Teradata data warehouse to BigQuery. You want to move the historical data to BigQuery by using the most efficient method that requires the least amount of programming, but local storage space on your existing data warehouse is limited. What should you do?",
        "options": {
            "A": "Use BigQuery Data Transfer Service by using the Java Database Connectivity (JDBC) driver with FastExport connection.",
            "B": "Create a Teradata Parallel Transporter (TPT) export script to export the historical data, and import to BigQuery by using the bq command-line tool.",
            "C": "Use BigQuery Data Transfer Service with the Teradata Parallel Transporter (TPT) tbuild utility.",
            "D": "Create a script to export the historical data, and upload in batches to Cloud Storage. Set up a BigQuery Data Transfer Service instance from Cloud Storage to BigQuery."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "262",
        "question": "You are on the data governance team and are implementing security requirements. You need to encrypt all your data in BigQuery by using an encryption key managed by your team. You must implement a mechanism to generate and store encryption material only on your on-premises hardware security module (HSM). You want to rely on Google managed solutions. What should you do?",
        "options": {
            "A": "Create the encryption key in the on-premises HSM, and import it into a Cloud Key Management Service (Cloud KMS) key. Associate the created Cloud KMS key while creating the BigQuery resources.",
            "B": "Create the encryption key in the on-premises HSM and link it to a Cloud External Key Manager (Cloud EKM) key. Associate the created Cloud KMS key while creating the BigQuery resources.",
            "C": "Create the encryption key in the on-premises HSM, and import it into Cloud Key Management Service (Cloud HSM) key. Associate the created Cloud HSM key while creating the BigQuery resources.",
            "D": "Create the encryption key in the on-premises HSM. Create BigQuery resources and encrypt data while ingesting them into BigQuery."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "263",
        "question": "You maintain ETL pipelines. You notice that a streaming pipeline running on Dataflow is taking a long time to process incoming data, which causes output delays. You also noticed that the pipeline graph was automatically optimized by Dataflow and merged into one step. You want to identify where the potential bottleneck is occurring. What should you do?",
        "options": {
            "A": "Insert a Reshuffle operation after each processing step, and monitor the execution details in the Dataflow console.",
            "B": "Insert output sinks after each key processing step, and observe the writing throughput of each block.",
            "C": "Log debug information in each ParDo function, and analyze the logs at execution time.",
            "D": "Verify that the Dataflow service accounts have appropriate permissions to write the processed data to the output sinks."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "264",
        "question": "You are running your BigQuery project in the on-demand billing model and are executing a change data capture (CDC) process that ingests data. The CDC process loads 1 GB of data every 10 minutes into a temporary table, and then performs a merge into a 10 TB target table. This process is very scan intensive and you want to explore options to enable a predictable cost model. You need to create a BigQuery reservation based on utilization information gathered from BigQuery Monitoring and apply the reservation to the CDC process. What should you do?",
        "options": {
            "A": "Create a BigQuery reservation for the dataset.",
            "B": "Create a BigQuery reservation for the job.",
            "C": "Create a BigQuery reservation for the service account running the job.",
            "D": "Create a BigQuery reservation for the project."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "265",
        "question": "You are designing a fault-tolerant architecture to store data in a regional BigQuery dataset. You need to ensure that your application is able to recover from a corruption event in your tables that occurred within the past seven days. You want to adopt managed services with the lowest RPO and most cost-effective solution. What should you do?",
        "options": {
            "A": "Access historical data by using time travel in BigQuery.",
            "B": "Export the data from BigQuery into a new table that excludes the corrupted data",
            "C": "Create a BigQuery table snapshot on a daily basis.",
            "D": "Migrate your data to multi-region BigQuery buckets."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "266",
        "question": "You are building a streaming Dataflow pipeline that ingests noise level data from hundreds of sensors placed near construction sites across a city. The sensors measure noise level every ten seconds, and send that data to the pipeline when levels reach above 70 dBA. You need to detect the average noise level from a sensor when data is received for a duration of more than 30 minutes, but the window ends when no data has been received for 15 minutes. What should you do?",
        "options": {
            "A": "Use session windows with a 15-minute gap duration.",
            "B": "Use session windows with a 30-minute gap duration.",
            "C": "Use hopping windows with a 15-minute window, and a thirty-minute period.",
            "D": "Use tumbling windows with a 15-minute window and a fifteen-minute .withAllowedLateness operator."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "267",
        "question": "You are creating a data model in BigQuery that will hold retail transaction data. Your two largest tables, sales_transaction_header and sales_transaction_line, have a tightly coupled immutable relationship. These tables are rarely modified after load and are frequently joined when queried. You need to model the sales_transaction_header and sales_transaction_line tables to improve the performance of data analytics queries. What should you do?",
        "options": {
            "A": "Create a sales_transaction table that holds the sales_transaction_header information as rows and the sales_transaction_line rows as nested and repeated fields.",
            "B": "Create a sales_transaction table that holds the sales_transaction_header and sales_transaction_line information as rows, duplicating the sales_transaction_header data for each line.",
            "C": "Create a sales_transaction table that stores the sales_transaction_header and sales_transaction_line data as a JSON data type.",
            "D": "Create separate sales_transaction_header and sales_transaction_line tables and, when querying, specify the sales_transaction_line first in the WHERE clause."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "268",
        "question": "You created a new version of a Dataflow streaming data ingestion pipeline that reads from Pub/Sub and writes to BigQuery. The previous version of the pipeline that runs in production uses a 5-minute window for processing. You need to deploy the new version of the pipeline without losing any data, creating inconsistencies, or increasing the processing latency by more than 10 minutes. What should you do?",
        "options": {
            "A": "Update the old pipeline with the new pipeline code.",
            "B": "Snapshot the old pipeline, stop the old pipeline, and then start the new pipeline from the snapshot.",
            "C": "Drain the old pipeline, then start the new pipeline.",
            "D": "Cancel the old pipeline, then start the new pipeline."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "269",
        "question": "Your organization's data assets are stored in BigQuery, Pub/Sub, and a PostgreSQL instance running on Compute Engine. Because there are multiple domains and diverse teams using the data, teams in your organization are unable to discover existing data assets. You need to design a solution to improve data discoverability while keeping development and configuration efforts to a minimum. What should you do?",
        "options": {
            "A": "Use Data Catalog to automatically catalog BigQuery datasets. Use Data Catalog APIs to manually catalog Pub/Sub topics and PostgreSQL tables.",
            "B": "Use Data Catalog to automatically catalog BigQuery datasets and Pub/Sub topics. Use Data Catalog APIs to manually catalog PostgreSQL tables.",
            "C": "Use Data Catalog to automatically catalog BigQuery datasets and Pub/Sub topics. Use custom connectors to manually catalog PostgreSQL tables.",
            "D": "Use customer connectors to manually catalog BigQuery datasets, Pub/Sub topics, and PostgreSQL tables."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "270",
        "question": "You need to create a SQL pipeline. The pipeline runs an aggregate SQL transformation on a BigQuery table every two hours and appends the result to another existing BigQuery table. You need to configure the pipeline to retry if errors occur. You want the pipeline to send an email notification after three consecutive failures. What should you do?",
        "options": {
            "A": "Use the BigQueryUpsertTableOperator in Cloud Composer, set the retry parameter to three, and set the email_on_failure parameter to true.",
            "B": "Use the BigQueryInsertJobOperator in Cloud Composer, set the retry parameter to three, and set the email_on_failure parameter to true.",
            "C": "Create a BigQuery scheduled query to run the SQL transformation with schedule options that repeats every two hours, and enable email notifications.",
            "D": "Create a BigQuery scheduled query to run the SQL transformation with schedule options that repeats every two hours, and enable notification to Pub/Sub topic. Use Pub/Sub and Cloud Functions to send an email after three failed executions."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "271",
        "question": "You are monitoring your organization\u2019s data lake hosted on BigQuery. The ingestion pipelines read data from Pub/Sub and write the data into tables on BigQuery. After a new version of the ingestion pipelines is deployed, the daily stored data increased by 50%. The volumes of data in Pub/Sub remained the same and only some tables had their daily partition data size doubled. You need to investigate and fix the cause of the data increase. What should you do?",
        "options": {
            "A": "1. Check for duplicate rows in the BigQuery tables that have the daily partition data size doubled.2. Schedule daily SQL jobs to deduplicate the affected tables.3. Share the deduplication script with the other operational teams to reuse if this occurs to other tables.",
            "B": "1. Check for code errors in the deployed pipelines.2. Check for multiple writing to pipeline BigQuery sink.3. Check for errors in Cloud Logging during the day of the release of the new pipelines.4. If no errors, restore the BigQuery tables to their content before the last release by using time travel.",
            "C": "1. Check for duplicate rows in the BigQuery tables that have the daily partition data size doubled.2. Check the BigQuery Audit logs to find job IDs.3. Use Cloud Monitoring to determine when the identified Dataflow jobs started and the pipeline code version.4. When more than one pipeline ingests data into a table, stop all versions except the latest one.",
            "D": "1. Roll back the last deployment.2. Restore the BigQuery tables to their content before the last release by using time travel.3. Restart the Dataflow jobs and replay the messages by seeking the subscription to the timestamp of the release."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "272",
        "question": "You have a BigQuery dataset named \u201ccustomers\u201d. All tables will be tagged by using a Data Catalog tag template named \u201cgdpr\u201d. The template contains one mandatory field, \u201chas_sensitive_data\u201d, with a boolean value. All employees must be able to do a simple search and find tables in the dataset that have either true or false in the \u201chas_sensitive_data\u2019 field. However, only the Human Resources (HR) group should be able to see the data inside the tables for which \u201chas_sensitive data\u201d is true. You give the all employees group the bigquery.metadataViewer and bigquery.connectionUser roles on the dataset. You want to minimize configuration overhead. What should you do next?",
        "options": {
            "A": "Create the \u201cgdpr\u201d tag template with private visibility. Assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data.",
            "B": "Create the \u201cgdpr\u201d tag template with private visibility. Assign the datacatalog.tagTemplateViewer role on this tag to the all employees group, and assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data.",
            "C": "Create the \u201cgdpr\u201d tag template with public visibility. Assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data.",
            "D": "Create the \u201cgdpr\u201d tag template with public visibility. Assign the datacatalog.tagTemplateViewer role on this tag to the all employees group, and assign the bigquery.dataViewer role to the HR group on the tables that contain sensitive data."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "273",
        "question": "You are creating the CI/CD cycle for the code of the directed acyclic graphs (DAGs) running in Cloud Composer. Your team has two Cloud Composer instances: one instance for development and another instance for production. Your team is using a Git repository to maintain and develop the code of the DAGs. You want to deploy the DAGs automatically to Cloud Composer when a certain tag is pushed to the Git repository. What should you do?",
        "options": {
            "A": "1. Use Cloud Build to copy the code of the DAG to the Cloud Storage bucket of the development instance for DAG testing.2. If the tests pass, use Cloud Build to copy the code to the bucket of the production instance.",
            "B": "1. Use Cloud Build to build a container with the code of the DAG and the KubernetesPodOperator to deploy the code to the Google Kubernetes Engine (GKE) cluster of the development instance for testing.2. If the tests pass, use the KubernetesPodOperator to deploy the container to the GKE cluster of the production instance.",
            "C": "1. Use Cloud Build to build a container and the KubernetesPodOperator to deploy the code of the DAG to the Google Kubernetes Engine (GKE) cluster of the development instance for testing.2. If the tests pass, copy the code to the Cloud Storage bucket of the production instance.",
            "D": "1. Use Cloud Build to copy the code of the DAG to the Cloud Storage bucket of the development instance for DAG testing.2. If the tests pass, use Cloud Build to build a container with the code of the DAG and the KubernetesPodOperator to deploy the container to the Google Kubernetes Engine (GKE) cluster of the production instance."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "274",
        "question": "You have a BigQuery table that ingests data directly from a Pub/Sub subscription. The ingested data is encrypted with a Google-managed encryption key. You need to meet a new organization policy that requires you to use keys from a centralized Cloud Key Management Service (Cloud KMS) project to encrypt data at rest. What should you do?",
        "options": {
            "A": "Use Cloud KMS encryption key with Dataflow to ingest the existing Pub/Sub subscription to the existing BigQuery table.",
            "B": "Create a new BigQuery table by using customer-managed encryption keys (CMEK), and migrate the data from the old BigQuery table.",
            "C": "Create a new Pub/Sub topic with CMEK and use the existing BigQuery table by using Google-managed encryption key.",
            "D": "Create a new BigQuery table and Pub/Sub topic by using customer-managed encryption keys (CMEK), and migrate the data from the old BigQuery table."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "275",
        "question": "You created an analytics environment on Google Cloud so that your data scientist team can explore data without impacting the on-premises Apache Hadoop solution. The data in the on-premises Hadoop Distributed File System (HDFS) cluster is in Optimized Row Columnar (ORC) formatted files with multiple columns of Hive partitioning. The data scientist team needs to be able to explore the data in a similar way as they used the on-premises HDFS cluster with SQL on the Hive query engine. You need to choose the most cost-effective storage and processing solution. What should you do?",
        "options": {
            "A": "Import the ORC files to Bigtable tables for the data scientist team.",
            "B": "Import the ORC files to BigQuery tables for the data scientist team.",
            "C": "Copy the ORC files on Cloud Storage, then deploy a Dataproc cluster for the data scientist team.",
            "D": "Copy the ORC files on Cloud Storage, then create external BigQuery tables for the data scientist team."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "276",
        "question": "You are designing a Dataflow pipeline for a batch processing job. You want to mitigate multiple zonal failures at job submission time. What should you do?",
        "options": {
            "A": "Submit duplicate pipelines in two different zones by using the --zone flag.",
            "B": "Set the pipeline staging location as a regional Cloud Storage bucket.",
            "C": "Specify a worker region by using the --region flag.",
            "D": "Create an Eventarc trigger to resubmit the job in case of zonal failure when submitting the job."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "277",
        "question": "You are designing a real-time system for a ride hailing app that identifies areas with high demand for rides to effectively reroute available drivers to meet the demand. The system ingests data from multiple sources to Pub/Sub, processes the data, and stores the results for visualization and analysis in real-time dashboards. The data sources include driver location updates every 5 seconds and app-based booking events from riders. The data processing involves real-time aggregation of supply and demand data for the last 30 seconds, every 2 seconds, and storing the results in a low-latency system for visualization. What should you do?",
        "options": {
            "A": "Group the data by using a tumbling window in a Dataflow pipeline, and write the aggregated data to Memorystore.",
            "B": "Group the data by using a hopping window in a Dataflow pipeline, and write the aggregated data to Memorystore.",
            "C": "Group the data by using a session window in a Dataflow pipeline, and write the aggregated data to BigQuery.",
            "D": "Group the data by using a hopping window in a Dataflow pipeline, and write the aggregated data to BigQuery."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "278",
        "question": "Your car factory is pushing machine measurements as messages into a Pub/Sub topic in your Google Cloud project. A Dataflow streaming job, that you wrote with the Apache Beam SDK, reads these messages, sends acknowledgment to Pub/Sub, applies some custom business logic in a DoFn instance, and writes the result to BigQuery. You want to ensure that if your business logic fails on a message, the message will be sent to a Pub/Sub topic that you want to monitor for alerting purposes. What should you do?",
        "options": {
            "A": "Enable retaining of acknowledged messages in your Pub/Sub pull subscription. Use Cloud Monitoring to monitor the subscription/num_retained_acked_messages metric on this subscription.",
            "B": "Use an exception handling block in your Dataflow\u2019s DoFn code to push the messages that failed to be transformed through a side output and to a new Pub/Sub topic. Use Cloud Monitoring to monitor the topic/num_unacked_messages_by_region metric on this new topic.",
            "C": "Enable dead lettering in your Pub/Sub pull subscription, and specify a new Pub/Sub topic as the dead letter topic. Use Cloud Monitoring to monitor the subscription/dead_letter_message_count metric on your pull subscription.",
            "D": "Create a snapshot of your Pub/Sub pull subscription. Use Cloud Monitoring to monitor the snapshot/num_messages metric on this snapshot."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "279",
        "question": "You want to store your team\u2019s shared tables in a single dataset to make data easily accessible to various analysts. You want to make this data readable but unmodifiable by analysts. At the same time, you want to provide the analysts with individual workspaces in the same project, where they can create and store tables for their own use, without the tables being accessible by other analysts. What should you do?",
        "options": {
            "A": "Give analysts the BigQuery Data Viewer role at the project level. Create one other dataset, and give the analysts the BigQuery Data Editor role on that dataset.",
            "B": "Give analysts the BigQuery Data Viewer role at the project level. Create a dataset for each analyst, and give each analyst the BigQuery Data Editor role at the project level.",
            "C": "Give analysts the BigQuery Data Viewer role on the shared dataset. Create a dataset for each analyst, and give each analyst the BigQuery Data Editor role at the dataset level for their assigned dataset.",
            "D": "Give analysts the BigQuery Data Viewer role on the shared dataset. Create one other dataset and give the analysts the BigQuery Data Editor role on that dataset."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "280",
        "question": "You are running a streaming pipeline with Dataflow and are using hopping windows to group the data as the data arrives. You noticed that some data is arriving late but is not being marked as late data, which is resulting in inaccurate aggregations downstream. You need to find a solution that allows you to capture the late data in the appropriate window. What should you do?",
        "options": {
            "A": "Use watermarks to define the expected data arrival window. Allow late data as it arrives.",
            "B": "Change your windowing function to tumbling windows to avoid overlapping window periods.",
            "C": "Change your windowing function to session windows to define your windows based on certain activity.",
            "D": "Expand your hopping window so that the late data has more time to arrive within the grouping."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "281",
        "question": "You work for a large ecommerce company. You store your customer's order data in Bigtable. You have a garbage collection policy set to delete the data after 30 days and the number of versions is set to 1. When the data analysts run a query to report total customer spending, the analysts sometimes see customer data that is older than 30 days. You need to ensure that the analysts do not see customer data older than 30 days while minimizing cost and overhead. What should you do?",
        "options": {
            "A": "Set the expiring values of the column families to 29 days and keep the number of versions to 1.",
            "B": "Use a timestamp range filter in the query to fetch the customer's data for a specific range.",
            "C": "Schedule a job daily to scan the data in the table and delete data older than 30 days.",
            "D": "Set the expiring values of the column families to 30 days and set the number of versions to 2."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "282",
        "question": "You are using a Dataflow streaming job to read messages from a message bus that does not support exactly-once delivery. Your job then applies some transformations, and loads the result into BigQuery. You want to ensure that your data is being streamed into BigQuery with exactly-once delivery semantics. You expect your ingestion throughput into BigQuery to be about 1.5 GB per second. What should you do?",
        "options": {
            "A": "Use the BigQuery Storage Write API and ensure that your target BigQuery table is regional.",
            "B": "Use the BigQuery Storage Write API and ensure that your target BigQuery table is multiregional.",
            "C": "Use the BigQuery Streaming API and ensure that your target BigQuery table is regional.",
            "D": "Use the BigQuery Streaming API and ensure that your target BigQuery table is multiregional."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "283",
        "question": "You have created an external table for Apache Hive partitioned data that resides in a Cloud Storage bucket, which contains a large number of files. You notice that queries against this table are slow. You want to improve the performance of these queries. What should you do?",
        "options": {
            "A": "Change the storage class of the Hive partitioned data objects from Coldline to Standard.",
            "B": "Create an individual external table for each Hive partition by using a common table name prefix. Use wildcard table queries to reference the partitioned data.",
            "C": "Upgrade the external table to a BigLake table. Enable metadata caching for the table.",
            "D": "Migrate the Hive partitioned data objects to a multi-region Cloud Storage bucket."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "284",
        "question": "You have a network of 1000 sensors. The sensors generate time series data: one metric per sensor per second, along with a timestamp. You already have 1 TB of data, and expect the data to grow by 1 GB every day. You need to access this data in two ways. The first access pattern requires retrieving the metric from one specific sensor stored at a specific timestamp, with a median single-digit millisecond latency. The second access pattern requires running complex analytic queries on the data, including joins, once a day. How should you store this data?",
        "options": {
            "A": "Store your data in BigQuery. Concatenate the sensor ID and timestamp, and use it as the primary key.",
            "B": "Store your data in Bigtable. Concatenate the sensor ID and timestamp and use it as the row key. Perform an export to BigQuery every day.",
            "C": "Store your data in Bigtable. Concatenate the sensor ID and metric, and use it as the row key. Perform an export to BigQuery every day.",
            "D": "Store your data in BigQuery. Use the metric as a primary key."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "285",
        "question": "You have 100 GB of data stored in a BigQuery table. This data is outdated and will only be accessed one or two times a year for analytics with SQL. For backup purposes, you want to store this data to be immutable for 3 years. You want to minimize storage costs. What should you do?",
        "options": {
            "A": "1. Create a BigQuery table clone.2. Query the clone when you need to perform analytics.",
            "B": "1. Create a BigQuery table snapshot.2. Restore the snapshot when you need to perform analytics.",
            "C": "1. Perform a BigQuery export to a Cloud Storage bucket with archive storage class.2. Enable versioning on the bucket.3. Create a BigQuery external table on the exported files.",
            "D": "1. Perform a BigQuery export to a Cloud Storage bucket with archive storage class.2. Set a locked retention policy on the bucket.3. Create a BigQuery external table on the exported files."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "286",
        "question": "You have thousands of Apache Spark jobs running in your on-premises Apache Hadoop cluster. You want to migrate the jobs to Google Cloud. You want to use managed services to run your jobs instead of maintaining a long-lived Hadoop cluster yourself. You have a tight timeline and want to keep code changes to a minimum. What should you do?",
        "options": {
            "A": "Move your data to BigQuery. Convert your Spark scripts to a SQL-based processing approach.",
            "B": "Rewrite your jobs in Apache Beam. Run your jobs in Dataflow.",
            "C": "Copy your data to Compute Engine disks. Manage and run your jobs directly on those instances.",
            "D": "Move your data to Cloud Storage. Run your jobs on Dataproc."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "287",
        "question": "You are administering shared BigQuery datasets that contain views used by multiple teams in your organization. The marketing team is concerned about the variability of their monthly BigQuery analytics spend using the on-demand billing model. You need to help the marketing team establish a consistent BigQuery analytics spend each month. What should you do?",
        "options": {
            "A": "Create a BigQuery Enterprise reservation with a baseline of 250 slots and autoscaling set to 500 for the marketing team, and bill them back accordingly.",
            "B": "Establish a BigQuery quota for the marketing team, and limit the maximum number of bytes scanned each day.",
            "C": "Create a BigQuery reservation with a baseline of 500 slots with no autoscaling for the marketing team, and bill them back accordingly.",
            "D": "Create a BigQuery Standard pay-as-you go reservation with a baseline of 0 slots and autoscaling set to 500 for the marketing team, and bill them back accordingly."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "288",
        "question": "You are part of a healthcare organization where data is organized and managed by respective data owners in various storage services. As a result of this decentralized ecosystem, discovering and managing data has become difficult. You need to quickly identify and implement a cost-optimized solution to assist your organization with the following:\n\u2022\tData management and discovery\n\u2022\tData lineage tracking\n\u2022\tData quality validation\nHow should you build the solution?",
        "options": {
            "A": "Use BigLake to convert the current solution into a data lake architecture.",
            "B": "Build a new data discovery tool on Google Kubernetes Engine that helps with new source onboarding and data lineage tracking.",
            "C": "Use BigQuery to track data lineage, and use Dataprep to manage data and perform data quality validation.",
            "D": "Use Dataplex to manage data, track data lineage, and perform data quality validation."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "289",
        "question": "You have data located in BigQuery that is used to generate reports for your company. You have noticed some weekly executive report fields do not correspond to format according to company standards. For example, report errors include different telephone formats and different country code identifiers. This is a frequent issue, so you need to create a recurring job to normalize the data. You want a quick solution that requires no coding. What should you do?",
        "options": {
            "A": "Use Cloud Data Fusion and Wrangler to normalize the data, and set up a recurring job.",
            "B": "Use Dataflow SQL to create a job that normalizes the data, and that after the first run of the job, schedule the pipeline to execute recurrently.",
            "C": "Create a Spark job and submit it to Dataproc Serverless.",
            "D": "Use BigQuery and GoogleSQL to normalize the data, and schedule recurring queries in BigQuery."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "290",
        "question": "You are designing a messaging system by using Pub/Sub to process clickstream data with an event-driven consumer app that relies on a push subscription. You need to configure the messaging system that is reliable enough to handle temporary downtime of the consumer app. You also need the messaging system to store the input messages that cannot be consumed by the subscriber. The system needs to retry failed messages gradually, avoiding overloading the consumer app, and store the failed messages after a maximum of 10 retries in a topic. How should you configure the Pub/Sub subscription?",
        "options": {
            "A": "Increase the acknowledgement deadline to 10 minutes.",
            "B": "Use immediate redelivery as the subscription retry policy, and configure dead lettering to a different topic with maximum delivery attempts set to 10.",
            "C": "Use exponential backoff as the subscription retry policy, and configure dead lettering to the same source topic with maximum delivery attempts set to 10.",
            "D": "Use exponential backoff as the subscription retry policy, and configure dead lettering to a different topic with maximum delivery attempts set to 10."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "291",
        "question": "You designed a data warehouse in BigQuery to analyze sales data. You want a self-serving, low-maintenance, and cost- effective solution to share the sales dataset to other business units in your organization. What should you do?",
        "options": {
            "A": "Create an Analytics Hub private exchange, and publish the sales dataset.",
            "B": "Enable the other business units\u2019 projects to access the authorized views of the sales dataset.",
            "C": "Create and share views with the users in the other business units.",
            "D": "Use the BigQuery Data Transfer Service to create a schedule that copies the sales dataset to the other business units\u2019 projects."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "292",
        "question": "You have terabytes of customer behavioral data streaming from Google Analytics into BigQuery daily. Your customers\u2019 information, such as their preferences, is hosted on a Cloud SQL for MySQL database. Your CRM database is hosted on a Cloud SQL for PostgreSQL instance. The marketing team wants to use your customers\u2019 information from the two databases and the customer behavioral data to create marketing campaigns for yearly active customers. You need to ensure that the marketing team can run the campaigns over 100 times a day on typical days and up to 300 during sales. At the same time, you want to keep the load on the Cloud SQL databases to a minimum. What should you do?",
        "options": {
            "A": "Create BigQuery connections to both Cloud SQL databases. Use BigQuery federated queries on the two databases and the Google Analytics data on BigQuery to run these queries.",
            "B": "Create a job on Apache Spark with Dataproc Serverless to query both Cloud SQL databases and the Google Analytics data on BigQuery for these queries.",
            "C": "Create streams in Datastream to replicate the required tables from both Cloud SQL databases to BigQuery for these queries.",
            "D": "Create a Dataproc cluster with Trino to establish connections to both Cloud SQL databases and BigQuery, to execute the queries."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "293",
        "question": "Your organization is modernizing their IT services and migrating to Google Cloud. You need to organize the data that will be stored in Cloud Storage and BigQuery. You need to enable a data mesh approach to share the data between sales, product design, and marketing departments. What should you do?",
        "options": {
            "A": "1. Create a project for storage of the data for each of your departments.2. Enable each department to create Cloud Storage buckets and BigQuery datasets.3. Create user groups for authorized readers for each bucket and dataset.4. Enable the IT team to administer the user groups to add or remove users as the departments\u2019 request.",
            "B": "1. Create multiple projects for storage of the data for each of your departments\u2019 applications.2. Enable each department to create Cloud Storage buckets and BigQuery datasets.3. Publish the data that each department shared in Analytics Hub.4. Enable all departments to discover and subscribe to the data they need in Analytics Hub.",
            "C": "1. Create a project for storage of the data for your organization.2. Create a central Cloud Storage bucket with three folders to store the files for each department.3. Create a central BigQuery dataset with tables prefixed with the department name.4. Give viewer rights for the storage project for the users of your departments.",
            "D": "1. Create multiple projects for storage of the data for each of your departments\u2019 applications.2. Enable each department to create Cloud Storage buckets and BigQuery datasets.3. In Dataplex, map each department to a data lake and the Cloud Storage buckets, and map the BigQuery datasets to zones.4. Enable each department to own and share the data of their data lakes."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "294",
        "question": "You work for a large ecommerce company. You are using Pub/Sub to ingest the clickstream data to Google Cloud for analytics. You observe that when a new subscriber connects to an existing topic to analyze data, they are unable to subscribe to older data. For an upcoming yearly sale event in two months, you need a solution that, once implemented, will enable any new subscriber to read the last 30 days of data. What should you do?",
        "options": {
            "A": "Create a new topic, and publish the last 30 days of data each time a new subscriber connects to an existing topic.",
            "B": "Set the topic retention policy to 30 days.",
            "C": "Set the subscriber retention policy to 30 days.",
            "D": "Ask the source system to re-push the data to Pub/Sub, and subscribe to it."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "295",
        "question": "You are designing the architecture to process your data from Cloud Storage to BigQuery by using Dataflow. The network team provided you with the Shared VPC network and subnetwork to be used by your pipelines. You need to enable the deployment of the pipeline on the Shared VPC network. What should you do?",
        "options": {
            "A": "Assign the compute.networkUser role to the Dataflow service agent.",
            "B": "Assign the compute.networkUser role to the service account that executes the Dataflow pipeline.",
            "C": "Assign the dataflow.admin role to the Dataflow service agent.",
            "D": "Assign the dataflow.admin role to the service account that executes the Dataflow pipeline."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "296",
        "question": "Your infrastructure team has set up an interconnect link between Google Cloud and the on-premises network. You are designing a high-throughput streaming pipeline to ingest data in streaming from an Apache Kafka cluster hosted on- premises. You want to store the data in BigQuery, with as minimal latency as possible. What should you do?",
        "options": {
            "A": "Setup a Kafka Connect bridge between Kafka and Pub/Sub. Use a Google-provided Dataflow template to read the data from Pub/Sub, and write the data to BigQuery.",
            "B": "Use a proxy host in the VPC in Google Cloud connecting to Kafka. Write a Dataflow pipeline, read data from the proxy host, and write the data to BigQuery.",
            "C": "Use Dataflow, write a pipeline that reads the data from Kafka, and writes the data to BigQuery.",
            "D": "Setup a Kafka Connect bridge between Kafka and Pub/Sub. Write a Dataflow pipeline, read the data from Pub/Sub, and write the data to BigQuery."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "297",
        "question": "You migrated your on-premises Apache Hadoop Distributed File System (HDFS) data lake to Cloud Storage. The data scientist team needs to process the data by using Apache Spark and SQL. Security policies need to be enforced at the column level. You need a cost-effective solution that can scale into a data mesh. What should you do?",
        "options": {
            "A": "1. Deploy a long-living Dataproc cluster with Apache Hive and Ranger enabled.2. Configure Ranger for column level security.3. Process with Dataproc Spark or Hive SQL.",
            "B": "1. Define a BigLake table.2. Create a taxonomy of policy tags in Data Catalog.3. Add policy tags to columns.4. Process with the Spark-BigQuery connector or BigQuery SQL.",
            "C": "1. Load the data to BigQuery tables.2. Create a taxonomy of policy tags in Data Catalog.3. Add policy tags to columns.4. Process with the Spark-BigQuery connector or BigQuery SQL.",
            "D": "1. Apply an Identity and Access Management (IAM) policy at the file level in Cloud Storage.2. Define a BigQuery external table for SQL processing.3. Use Dataproc Spark to process the Cloud Storage files."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "298",
        "question": "One of your encryption keys stored in Cloud Key Management Service (Cloud KMS) was exposed. You need to re- encrypt all of your CMEK-protected Cloud Storage data that used that key, and then delete the compromised key. You also want to reduce the risk of objects getting written without customer-managed encryption key (CMEK) protection in the future. What should you do?",
        "options": {
            "A": "Rotate the Cloud KMS key version. Continue to use the same Cloud Storage bucket.",
            "B": "Create a new Cloud KMS key. Set the default CMEK key on the existing Cloud Storage bucket to the new one.",
            "C": "Create a new Cloud KMS key. Create a new Cloud Storage bucket. Copy all objects from the old bucket to the new one bucket while specifying the new Cloud KMS key in the copy command.",
            "D": "Create a new Cloud KMS key. Create a new Cloud Storage bucket configured to use the new key as the default CMEK key. Copy all objects from the old bucket to the new bucket without specifying a key."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "299",
        "question": "You have an upstream process that writes data to Cloud Storage. This data is then read by an Apache Spark job that runs on Dataproc. These jobs are run in the us-central1 region, but the data could be stored anywhere in the United States. You need to have a recovery process in place in case of a catastrophic single region failure. You need an approach with a maximum of 15 minutes of data loss (RPO=15 mins). You want to ensure that there is minimal latency when reading the data. What should you do?",
        "options": {
            "A": "1. Create two regional Cloud Storage buckets, one in the us-central1 region and one in the us-south1 region.2. Have the upstream process write data to the us-central1 bucket. Use the Storage Transfer Service to copy data hourly from the us-central1 bucket to the us-south1 bucket.3. Run the Dataproc cluster in a zone in the us-central1 region, reading from the bucket in that region.4. In case of regional failure, redeploy your Dataproc clusters to the us-south1 region and read from the bucket in that region instead.",
            "B": "1. Create a Cloud Storage bucket in the US multi-region.2. Run the Dataproc cluster in a zone in the us-central1 region, reading data from the US multi-region bucket.3. In case of a regional failure, redeploy the Dataproc cluster to the us-central2 region and continue reading from the same bucket.",
            "C": "1. Create a dual-region Cloud Storage bucket in the us-central1 and us-south1 regions.2. Enable turbo replication.3. Run the Dataproc cluster in a zone in the us-central1 region, reading from the bucket in the us-south1 region.4. In case of a regional failure, redeploy your Dataproc cluster to the us-south1 region and continue reading from the same bucket.",
            "D": "1. Create a dual-region Cloud Storage bucket in the us-central1 and us-south1 regions.2. Enable turbo replication.3. Run the Dataproc cluster in a zone in the us-central1 region, reading from the bucket in the same region.4. In case of a regional failure, redeploy the Dataproc clusters to the us-south1 region and read from the same bucket."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "300",
        "question": "You currently have transactional data stored on-premises in a PostgreSQL database. To modernize your data environment, you want to run transactional workloads and support analytics needs with a single database. You need to move to Google Cloud without changing database management systems, and minimize cost and complexity. What should you do?",
        "options": {
            "A": "Migrate and modernize your database with Cloud Spanner.",
            "B": "Migrate your workloads to AlloyDB for PostgreSQL.",
            "C": "Migrate to BigQuery to optimize analytics.",
            "D": "Migrate your PostgreSQL database to Cloud SQL for PostgreSQL."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "301",
        "question": "You are architecting a data transformation solution for BigQuery. Your developers are proficient with SQL and want to use the ELT development technique. In addition, your developers need an intuitive coding environment and the ability to manage SQL as code. You need to identify a solution for your developers to build these pipelines. What should you do?",
        "options": {
            "A": "Use Dataform to build, manage, and schedule SQL pipelines.",
            "B": "Use Dataflow jobs to read data from Pub/Sub, transform the data, and load the data to BigQuery.",
            "C": "Use Data Fusion to build and execute ETL pipelines.",
            "D": "Use Cloud Composer to load data and run SQL pipelines by using the BigQuery job operators."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "302",
        "question": "You work for a farming company. You have one BigQuery table named sensors, which is about 500 MB and contains the list of your 5000 sensors, with columns for id, name, and location. This table is updated every hour. Each sensor generates one metric every 30 seconds along with a timestamp, which you want to store in BigQuery. You want to run an analytical query on the data once a week for monitoring purposes. You also want to minimize costs. What data model should you use?",
        "options": {
            "A": "1. Create a metrics column in the sensors table.2. Set RECORD type and REPEATED mode for the metrics column.3. Use an UPDATE statement every 30 seconds to add new metrics.",
            "B": "1. Create a metrics column in the sensors table.2. Set RECORD type and REPEATED mode for the metrics column.3. Use an INSERT statement every 30 seconds to add new metrics.",
            "C": "1. Create a metrics table partitioned by timestamp.2. Create a sensorId column in the metrics table, that points to the id column in the sensors table.3. Use an INSERT statement every 30 seconds to append new metrics to the metrics table.4. Join the two tables, if needed, when running the analytical query.",
            "D": "1. Create a metrics table partitioned by timestamp.2. Create a sensorId column in the metrics table, which points to the id column in the sensors table.3. Use an UPDATE statement every 30 seconds to append new metrics to the metrics table.4. Join the two tables, if needed, when running the analytical query."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "303",
        "question": "You are managing a Dataplex environment with raw and curated zones. A data engineering team is uploading JSON and CSV files to a bucket asset in the curated zone but the files are not being automatically discovered by Dataplex. What should you do to ensure that the files are discovered by Dataplex?",
        "options": {
            "A": "Move the JSON and CSV files to the raw zone.",
            "B": "Enable auto-discovery of files for the curated zone.",
            "C": "Use the bg command-line tool to load the JSON and CSV files into BigQuery tables.",
            "D": "Grant object level access to the CSV and JSON files in Cloud Storage."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "304",
        "question": "You have a table that contains millions of rows of sales data, partitioned by date. Various applications and users query this data many times a minute. The query requires aggregating values by using AVG, MAX, and SUM, and does not require joining to other tables. The required aggregations are only computed over the past year of data, though you need to retain full historical data in the base tables. You want to ensure that the query results always include the latest data from the tables, while also reducing computation cost, maintenance overhead, and duration. What should you do?",
        "options": {
            "A": "Create a materialized view to aggregate the base table data. Include a filter clause to specify the last one year of partitions.",
            "B": "Create a materialized view to aggregate the base table data. Configure a partition expiration on the base table to retain only the last one year of partitions.",
            "C": "Create a view to aggregate the base table data. Include a filter clause to specify the last year of partitions.",
            "D": "Create a new table that aggregates the base table data. Include a filter clause to specify the last year of partitions. Set up a scheduled query to recreate the new table every hour."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "305",
        "question": "Your organization uses a multi-cloud data storage strategy, storing data in Cloud Storage, and data in Amazon Web Services\u2019 (AWS) S3 storage buckets. All data resides in US regions. You want to query up-to-date data by using BigQuery, regardless of which cloud the data is stored in. You need to allow users to query the tables from BigQuery without giving direct access to the data in the storage buckets. What should you do?",
        "options": {
            "A": "Setup a BigQuery Omni connection to the AWS S3 bucket data. Create BigLake tables over the Cloud Storage and S3 data and query the data using BigQuery directly.",
            "B": "Set up a BigQuery Omni connection to the AWS S3 bucket data. Create external tables over the Cloud Storage and S3 data and query the data using BigQuery directly.",
            "C": "Use the Storage Transfer Service to copy data from the AWS S3 buckets to Cloud Storage buckets. Create BigLake tables over the Cloud Storage data and query the data using BigQuery directly.",
            "D": "Use the Storage Transfer Service to copy data from the AWS S3 buckets to Cloud Storage buckets. Create external tables over the Cloud Storage data and query the data using BigQuery directly."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "306",
        "question": "You are preparing an organization-wide dataset. You need to preprocess customer data stored in a restricted bucket in Cloud Storage. The data will be used to create consumer analyses. You need to comply with data privacy requirements.\nWhat should you do?",
        "options": {
            "A": "Use Dataflow and the Cloud Data Loss Prevention API to mask sensitive data. Write the processed data in BigQuery.",
            "B": "Use customer-managed encryption keys (CMEK) to directly encrypt the data in Cloud Storage. Use federated queries from BigQuery. Share the encryption key by following the principle of least privilege.",
            "C": "Use the Cloud Data Loss Prevention API and Dataflow to detect and remove sensitive fields from the data in Cloud Storage. Write the filtered data in BigQuery.",
            "D": "Use Dataflow and Cloud KMS to encrypt sensitive fields and write the encrypted data in BigQuery. Share the encryption key by following the principle of least privilege."
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "307",
        "question": "You need to connect multiple applications with dynamic public IP addresses to a Cloud SQL instance. You configured users with strong passwords and enforced the SSL connection to your Cloud SQL instance. You want to use Cloud SQL public IP and ensure that you have secured connections. What should you do?",
        "options": {
            "A": "Add CIDR 0.0.0.0/0 network to Authorized Network. Use Identity and Access Management (IAM) to add users.",
            "B": "Add all application networks to Authorized Network and regularly update them.",
            "C": "Leave the Authorized Network empty. Use Cloud SQL Auth proxy on all applications.",
            "D": "Add CIDR 0.0.0.0/0 network to Authorized Network. Use Cloud SQL Auth proxy on all applications."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "308",
        "question": "You are migrating a large number of files from a public HTTPS endpoint to Cloud Storage. The files are protected from unauthorized access using signed URLs. You created a TSV file that contains the list of object URLs and started a transfer job by using Storage Transfer Service. You notice that the job has run for a long time and eventually failed. Checking the logs of the transfer job reveals that the job was running fine until one point, and then it failed due to HTTP 403 errors on the remaining files. You verified that there were no changes to the source system. You need to fix the problem to resume the migration process. What should you do?",
        "options": {
            "A": "Set up Cloud Storage FUSE, and mount the Cloud Storage bucket on a Compute Engine instance. Remove the completed files from the TSV file. Use a shell script to iterate through the TSV file and download the remaining URLs to the FUSE mount point.",
            "B": "Renew the TLS certificate of the HTTPS endpoint. Remove the completed files from the TSV file and rerun the Storage Transfer Service job.",
            "C": "Create a new TSV file for the remaining files by generating signed URLs with a longer validity period. Split the TSV file into multiple smaller files and submit them as separate Storage Transfer Service jobs in parallel.",
            "D": "Update the file checksums in the TSV file from using MD5 to SHA256. Remove the completed files from the TSV file and rerun the Storage Transfer Service job."
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "309",
        "question": "You work for an airline and you need to store weather data in a BigQuery table. Weather data will be used as input to a machine learning model. The model only uses the last 30 days of weather data. You want to avoid storing unnecessary data and minimize costs. What should you do?",
        "options": {
            "A": "Create a BigQuery table where each record has an ingestion timestamp. Run a scheduled query to delete all the rows with an ingestion timestamp older than 30 days.",
            "B": "Create a BigQuery table partitioned by datetime value of the weather date. Set up partition expiration to 30 days.",
            "C": "Create a BigQuery table partitioned by ingestion time. Set up partition expiration to 30 days.",
            "D": "Create a BigQuery table with a datetime column for the day the weather data refers to. Run a scheduled query to delete rows with a datetime value older than 30 days."
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "310",
        "question": "You need to look at BigQuery data from a specific table multiple times a day. The underlying table you are querying is several petabytes in size, but you want to filter your data and provide simple aggregations to downstream users. You want to run queries faster and get up-to-date insights quicker. What should you do?",
        "options": {
            "A": "Run a scheduled query to pull the necessary data at specific intervals dally.",
            "B": "Use a cached query to accelerate time to results.",
            "C": "Limit the query columns being pulled in the final result.",
            "D": "Create a materialized view based off of the query being run."
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "311",
        "question": "Your chemical company needs to manually check documentation for customer order. You use a pull subscription in Pub/Sub so that sales agents get details from the order. You must ensure that you do not process orders twice with different sales agents and that you do not add more complexity to this workflow. What should you do?",
        "options": {
            "A": "Use a Deduplicate PTransform in Dataflow before sending the messages to the sales agents.",
            "B": "Create a transactional database that monitors the pending messages.",
            "C": "Use Pub/Sub exactly-once delivery in your pull subscription.",
            "D": "Create a new Pub/Sub push subscription to monitor the orders processed in the agent's system."
        },
        "answer": "C",
        "reason": ""
    }
]



