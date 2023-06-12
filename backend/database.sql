/* eslint no-use-before-define: 0 */

-- Active: 1675088471994@@127.0.0.1@3306@blog_backoffice

DROP TABLE IF EXISTS article_to_tags;

DROP TABLE IF EXISTS article;

DROP TABLE IF EXISTS tags;

DROP TABLE IF EXISTS images;

DROP TABLE IF EXISTS users;

CREATE TABLE
    users (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        email VARCHAR(255) UNIQUE,
        encrypt_pwd VARCHAR(255)
    );

CREATE TABLE
    images (
        id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
        src VARCHAR(255),
        alt VARCHAR(255)
    );

INSERT INTO images(src, alt)
VALUES (
        'https://upload.wikimedia.org/wikipedia/commons/e/e7/Everest_North_Face_toward_Base_Camp_Tibet_Luca_Galuzzi_2006.jpg',
        'Lorem Ipsum'
    );

INSERT INTO images(src, alt)
VALUES (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg/1200px-K2%2C_Mount_Godwin_Austen%2C_Chogori%2C_Savage_Mountain.jpg',
        'Lorem Ipsum'
    );

INSERT INTO images(src, alt)
VALUES (
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Mount_Kilimanjaro_Dec_2009_edit1.jpg/1024px-Mount_Kilimanjaro_Dec_2009_edit1.jpg',
        'Lorem Ipsum'
    );

INSERT INTO images(src, alt)
VALUES (
        'https://upload.wikimedia.org/wikipedia/commons/0/03/Mont-Blanc_from_Planpraz_station.jpg',
        'Lorem Ipsum'
    );

INSERT INTO images(src, alt)
VALUES (
        'https://upload.wikimedia.org/wikipedia/commons/0/03/Villn%C3%B6%C3%9F-Valley1960s.jpg',
        'Lorem Ipsum'
    );

INSERT INTO images(src, alt)
VALUES (
        'https://upload.wikimedia.org/wikipedia/commons/1/17/Pic_Ossau_Gentau.jpg',
        'Lorem Ipsum'
    );

CREATE TABLE
    tags (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        label VARCHAR(100)
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO tags(label)
VALUES ("Hiking"), ("Climbing"), ("Trailing"), ("nature"), ("Asia"), ("Africa"), ("Europe");

CREATE TABLE
    article (
        id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
        title VARCHAR(255) NOT NULL,
        subtitle VARCHAR(255) NOT NULL,
        resume LONGTEXT NOT NULL,
        text LONGTEXT NOT NULL,
        author VARCHAR(255) NOT NULL,
        image_id INT NOT NULL,
        CONSTRAINT image_id_FK FOREIGN KEY (image_id) REFERENCES images(id) ON DELETE CASCADE
    ) ENGINE = InnoDB DEFAULT CHARSET = utf8;

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        author,
        image_id
    )
VALUES (
        1,
        'Everest North Face toward Base Camp Tibet.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        'Thomas Riviera',
        1
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        author,
        image_id
    )
VALUES (
        2,
        'K2 Mount Godwin Austen Chogori Savage Mountain',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        'Thomas Riviera',
        2
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        author,
        image_id
    )
VALUES (
        3,
        'Mount Kilimanjaro Dec 2009',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        'Thomas Riviera',
        3
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        author,
        image_id
    )
VALUES (
        4,
        'Mont-Blanc from Planpraz station',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        'Thomas Riviera',
        4
    );

INSERT INTO
    article(
        id,
        title,
        subtitle,
        resume,
        text,
        author,
        image_id
    )
VALUES (
        5,
        'Villnöß-Valley Dolomites',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet recusandae corrupti enim at neque sed, corporis eos vel dolores libero! Molestiae minus pariatur sunt sapiente magni asperiores quod, culpa magnam. Ea in deleniti iure quae quos neque. Officia harum quae esse asperiores, reiciendis assumenda optio doloremque non quod voluptatem hic! Corrupti, molestiae placeat neque nisi enim commodi pariatur modi ea. Temporibus, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        'Thomas Riviera',
        5
    );

INSERT INTO
    article(
        title,
        subtitle,
        resume,
        text,
        author,
        image_id
    )
VALUES (
        'Pic d''Ossau',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia illo tempora perferendis suscipit excepturi cum.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium libero iste debitis fugit, nihil recusandae aut quisquam tempore reprehenderit accusantium quasi ad officiis officia ilENGINE = InnoDB DEFAULT CHARSET = utf8;, magnam iure dolore inventore vel consectetur, debitis perspiciatis optio nostrum maiores voluptatum ullam ipsum expedita qui ducimus commodi fuga incidunt. Nobis hic eaque odit nemo aliquam, cumque ea dolore. Fuga in corrupti natus, error dolorem autem dicta, omnis, aspernatur hic itaque expedita soluta voluptatum iure id ipsum vero rem quidem vel sapiente aperiam corporis. Magni officia porro incidunt debitis! Qui optio aliquid voluptates dolor doloribus, repellendus amet hic doloremque, perferendis, quo velit! Asperiores quo vitae repudiandae ipsum animi perspiciatis, nesciunt tempora non laborum veniam corrupti quod deleniti. Ea, beatae.',
        'Thomas Riviera',
        6
    );

CREATE TABLE
    article_to_tags (
        id int UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
        article_id int NOT NULL,
        CONSTRAINT article_id_FK Foreign Key (article_id) REFERENCES article(id),
        tags_id int NOT NULL,
        CONSTRAINT tags_id_fk Foreign Key (tags_id) REFERENCES tags(id)
    );

INSERT INTO
    article_to_tags(article_id, tags_id)
VALUES (1, 1), (1, 2), (1, 4), (1, 5), (2, 1), (2, 2), (2, 4), (2, 5), (3, 1), (3, 3), (3, 4), (3, 6), (4, 1), (4, 3), (4, 4), (4, 7), (5, 1), (5, 3), (5, 4), (5, 7), (6, 1), (6, 3), (6, 4), (6, 7);