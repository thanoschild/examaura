export const dataEngineerQuestions = [
    {
        "topic": "Professional Data Engineer",
        "no": "44",
        "image": "",
        "question": "You are deploying a new storage system for your mobile application, which is a media streaming service. You decide the best fit is Google Cloud Datastore. You have entities with multiple properties, some of which can take on multiple values. For example, in the entity 'Movie' the property 'actors' and the property\n'tags' have multiple values but the property 'date released' does not. A typical query would ask for all movies with actor=<actorname> ordered by date_released or all movies with tag=Comedy ordered by date_released. How should you avoid a combinatorial explosion in the number of indexes?",
        "options": {
            "A": {
                "text": "Manually configure the index in your index config as follows:",
                "contains_image": "https://res.cloudinary.com/dkpkykbfx/image/upload/v1732561281/44_A_dxtipz.png"
            },
            "B": {
                "text": "Manually configure the index in your index config as follows:",
                "contains_image": "https://res.cloudinary.com/dkpkykbfx/image/upload/v1732561282/44_B_u6synd.png"
            },
            "C": {
                "text": "Set the following in your entity options: exclude_from_indexes = 'actors, tags'",
                "contains_image": ""
            },
            "D": {
                "text": "Set the following in your entity options: exclude_from_indexes = 'date_published'",
                "contains_image": ""
            }
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "213",
        "image": "https://res.cloudinary.com/dkpkykbfx/image/upload/v1732561286/213_Q_hdicsy.png",
        "question": "Your company's customer_order table in BigQuery stores the order history for 10 million customers, with a table size of 10 PB. You need to create a dashboard for the support team to view the order history. The dashboard has two filters, country_name and username. Both are string data types in the BigQuery table. When a filter is applied, the dashboard fetches the order history from the table and displays the query results. However, the dashboard is slow to show the results when applying the filters to the following query:\nHow should you redesign the BigQuery table to support faster access?",
        "options": {
            "A": {
                "text": "Cluster the table by country and username fields.",
                "contains_image": ""
            },
            "B": {
                "text": "Cluster the table by country field, and partition by username field.",
                "contains_image": ""
            },
            "C": {
                "text": "Partition the table by country and username fields.",
                "contains_image": ""
            },
            "D": {
                "text": "Partition the table by _PARTITIONTIME.",
                "contains_image": ""
            }
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "207",
        "image": "https://res.cloudinary.com/dkpkykbfx/image/upload/v1732561284/207_Q_wd2i3t.png",
        "question": "You are collecting IoT sensor data from millions of devices across the world and storing the data in BigQuery. Your access pattern is based on recent data, filtered by location_id and device_version with the following query:\nYou want to optimize your queries for cost and performance. How should you structure your data?",
        "options": {
            "A": {
                "text": "Partition table data by create_date, location_id, and device_version.",
                "contains_image": ""
            },
            "B": {
                "text": "Partition table data by create_date, cluster table data by location_id, and device_version.",
                "contains_image": ""
            },
            "C": {
                "text": "Cluster table data by create_date, location_id, and device_version.",
                "contains_image": ""
            },
            "D": {
                "text": "Cluster table data by create_date, partition by location_id, and device_version.",
                "contains_image": ""
            }
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "63",
        "image": "https://res.cloudinary.com/dkpkykbfx/image/upload/v1732566748/63_Q_mqgj5z.png",
        "question": "You have some data, which is shown in the graphic below. The two dimensions are X and Y, and the shade of each dot represents what class it is. You want to classify this data accurately using a linear algorithm. To do this you need to add a synthetic feature. What should the value of that feature be?",
        "options": {
            "A": {
                "text": "X2+Y2",
                "contains_image": ""
            },
            "B": {
                "text": "X2",
                "contains_image": ""
            },
            "C": {
                "text": "Y2",
                "contains_image": ""
            },
            "D": {
                "text": "cos(X)",
                "contains_image": ""
            }
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "1",
        "image": "",
        "question": "Your company built a TensorFlow neutral-network model with a large number of neurons and layers. The model fits well for the training data. However, when tested against new data, it performs poorly. What method can you employ to address this?",
        "options": {
            "A": {
                "text": "Threading",
                "contains_image": ""
            },
            "B": {
                "text": "Serialization",
                "contains_image": ""
            },
            "C": {
                "text": "Dropout Methods",
                "contains_image": ""
            },
            "D": {
                "text": "Dimensionality Reduction",
                "contains_image": ""
            }
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "2",
        "image": "",
        "question": "You are building a model to make clothing recommendations. You know a user's fashion preference is likely to change over time, so you build a data pipeline to stream new data back to the model as it becomes available. How should you use this data to train the model?",
        "options": {
            "A": {
                "text": "Continuously retrain the model on just the new data.",
                "contains_image": ""
            },
            "B": {
                "text": "Continuously retrain the model on a combination of existing data and the new data.",
                "contains_image": ""
            },
            "C": {
                "text": "Train on the existing data while using the new data as your test set.",
                "contains_image": ""
            },
            "D": {
                "text": "Train on the new data while using the existing data as your test set.",
                "contains_image": ""
            }
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "3",
        "image": "",
        "question": "You designed a database for patient records as a pilot project to cover a few hundred patients in three clinics. Your design used a single database table to represent all patients and their visits, and you used self-joins to generate reports. The server resource utilization was at 50%. Since then, the scope of the project has expanded. The database must now store 100 times more patient records. You can no longer run the reports, because they either take too long or they encounter errors with insufficient compute resources. How should you adjust the database design?",
        "options": {
            "A": {
                "text": "Add capacity (memory and disk space) to the database server by the order of 200.",
                "contains_image": ""
            },
            "B": {
                "text": "Shard the tables into smaller ones based on date ranges, and only generate reports with prespecified date ranges.",
                "contains_image": ""
            },
            "C": {
                "text": "Normalize the master patient-record table into the patient table and the visits table, and create other necessary tables to avoid self-join.",
                "contains_image": ""
            },
            "D": {
                "text": "Partition the table into smaller tables, with one for each clinic. Run queries against the smaller table pairs, and use unions for consolidated reports.",
                "contains_image": ""
            }
        },
        "answer": "C",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "4",
        "image": "",
        "question": "You create an important report for your large team in Google Data Studio 360. The report uses Google BigQuery as its data source. You notice that visualizations are not showing data that is less than 1 hour old. What should you do?",
        "options": {
            "A": {
                "text": "Disable caching by editing the report settings.",
                "contains_image": ""
            },
            "B": {
                "text": "Disable caching in BigQuery by editing table details.",
                "contains_image": ""
            },
            "C": {
                "text": "Refresh your browser tab showing the visualizations.",
                "contains_image": ""
            },
            "D": {
                "text": "Clear your browser history for the past hour then reload the tab showing the virtualizations.",
                "contains_image": ""
            }
        },
        "answer": "A",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "5",
        "image": "",
        "question": "An external customer provides you with a daily dump of data from their database. The data flows into Google Cloud Storage GCS as comma-separated values\n(CSV) files. You want to analyze this data in Google BigQuery, but the data could have rows that are formatted incorrectly or corrupted. How should you build this pipeline?",
        "options": {
            "A": {
                "text": "Use federated data sources, and check data in the SQL query.",
                "contains_image": ""
            },
            "B": {
                "text": "Enable BigQuery monitoring in Google Stackdriver and create an alert.",
                "contains_image": ""
            },
            "C": {
                "text": "Import the data into BigQuery using the gcloud CLI and set max_bad_records to 0.",
                "contains_image": ""
            },
            "D": {
                "text": "Run a Google Cloud Dataflow batch pipeline to import the data into BigQuery, and push errors to another dead-letter table for analysis.",
                "contains_image": ""
            }
        },
        "answer": "D",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "6",
        "image": "",
        "question": "Your weather app queries a database every 15 minutes to get the current temperature. The frontend is powered by Google App Engine and server millions of users. How should you design the frontend to respond to a database failure?",
        "options": {
            "A": {
                "text": "Issue a command to restart the database servers.",
                "contains_image": ""
            },
            "B": {
                "text": "Retry the query with exponential backoff, up to a cap of 15 minutes.",
                "contains_image": ""
            },
            "C": {
                "text": "Retry the query every second until it comes back online to minimize staleness of data.",
                "contains_image": ""
            },
            "D": {
                "text": "Reduce the query frequency to once every hour until the database comes back online.",
                "contains_image": ""
            }
        },
        "answer": "B",
        "reason": ""
    },
    {
        "topic": "Professional Data Engineer",
        "no": "10",
        "image": "",
        "question": "Your company is in a highly regulated industry. One of your requirements is to ensure individual users have access only to the minimum amount of information required to do their jobs. You want to enforce this requirement with Google BigQuery. Which three approaches can you take? (Choose three.)",
        "options": {
            "A": {
                "text": "Disable writes to certain tables.",
                "contains_image": ""
            },
            "B": {
                "text": "Restrict access to tables by role.",
                "contains_image": ""
            },
            "C": {
                "text": "Ensure that the data is encrypted at all times.",
                "contains_image": ""
            },
            "D": {
                "text": "Restrict BigQuery API access to approved users.",
                "contains_image": ""
            },
            "E": {
                "text": "Segregate data across multiple tables or databases.",
                "contains_image": ""
            },
            "F": {
                "text": "Use Google Stackdriver Audit Logging to determine policy violations.",
                "contains_image": ""
            }
        },
        "answer": "BDE",
        "reason": ""
    }
]


