## CS5220 Homework 3

For this assignment, please submit two ZIP files - one for the React SPA
project and one for the backend REST API.

------------------------------------------------------------------------

In this assignment you are going to implement a React SPA as the
frontend to the backend REST API implemented in Homework 2. You are free
to make any changes to the backend REST API code, but the grade for this
assignment will be based entirely on the React SPA as described below.

1\. (10pt) When the REST SPA is first loaded, it displays two links (or
buttons) like the following:

[Students][] \| [Groups][Students]

Clicking on *Students* should take the user to student listing, and
clicking on *Groups* should take the user to group listing.

2\. (30pt) Student listing displays all the students in the system. For
example:

[New Student][Students]

<div style="margin-left: 40px;">

| Student | Age | Parent | Email           | Group    |
|---------|-----|--------|-----------------|----------|
| John    | 4   | Sue    | sue@gmail.com   | Minnows  |
| Jane    | 9   | Sue    | sue@gmail.com   | Dolphins |
| Luke    | 5   | Steve  | steve@gmail.com | Minnows  |
| Tina    | 7   | Paula  | paula@gmail.com |          |

</div>

Note that if a student does not belong to any group, the Group column
for the student is empty.

3\. (30pt) Group listing displays all the groups in the system. For
example:

[New Group][]

<div style="margin-left: 40px;">

| Group    | Members    |
|----------|------------|
| Minnows  | John, Luke |
| Dolphins | Jane       |

</div>

Note that for each group, it also shows the students in the group.

4\. (30pt) A new group can be added like the following:

<div style="margin-left: 40px;">

|      |     |
|------|-----|
| Name |     |
| Add  |     |

</div>

After a new group is added, the application should take the user to
group listing.

5\. (30pt) A new student can be added like the following:

<div style="margin-left: 40px;">

|              |                  |
|--------------|------------------|
| Name         |                  |
| Birth Year   |                  |
| Parent Name  |                  |
| Parent Email |                  |
|--------------|------------------|
| Group        |   <select>       |
|              |     <options/>   |
|              |   </select>      |
|--------------|------------------|
| Add          |                  |

</div>

Note that the Group field for a new student can be empty, which means
the student is not in any group, or in other words, the student will
only take individual lessons. Also note that birth year is entered when
adding a student, while in student listing, age is displayed instead of
birth year. Age is calculated as (current year - birth year).

After a new student is added, the application should take the user to
student listing.

  [New Group]: #
