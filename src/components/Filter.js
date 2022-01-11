import { Input, Label } from "./styled/Common.styled";
import { FilterWrapper } from "./styled/Filter.styled";
import actions from "../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../redux/contacts/contacts-selectors";

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  return (
    <FilterWrapper>
      <Label>
        Find contacts by name
        <Input
          type="text"
          value={filter}
          onChange={(e) => dispatch(actions.filter(e.currentTarget.value))}
        />
      </Label>
    </FilterWrapper>
  );
};

export default Filter;
