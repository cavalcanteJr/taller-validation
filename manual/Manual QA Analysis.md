1. Acceptance Criteria

- No accept empty or none values
- Check if the value filled is present on the review section after submit as filled in the form
- Erro messages if fields are not filled
- Check message error in the Full Name field is filled with only one name (one string)
- Detail error message if the user missing or fill something wrong
  -- Email should explain why the user can not add a email without @ or .something
- Define a max and min caracther for fields

2. Essential Test Cases
   #Form validation

- Check if the form don't warning or crash if the field are not filled
- Check if the value of one field filled is shown o review section after submit
  -- Check each field individualy
- Check erros message and design erros if field be wrong filled

#Email validation

- On the email field, try to add an invalid email and submit it
  -- Check the error warning for it (message and design - red circle on the field)
- On the email field, try to add an valid email and submit it

#Display section

- Check if the Values added on the form is present and it's show properly as submitted
- Check the maximum and minimun carachteres is correct shown on the review section

3. Risks / Edge Cases

- The the user has a bigger Name, the review section can not show the correct Name
- Without explicit messages of erro the user can not understaging what need to be fix before submit
- The software can got erro data due missing aligenment on the review sextion
