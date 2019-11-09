import { renderHook, act } from '@testing-library/react-hooks';
import { useAddressBookFormHook } from './index';

describe('USE FORM HOOK', () => {
  it('should update first name', () => {
    const { result } = renderHook(() => useAddressBookFormHook());
    act(() => {
      result.current.setFirstName('Our');
    });
    expect(result.current.firstName).toBe('Our');
  });

  it('should update last name', () => {
    const { result } = renderHook(() => useAddressBookFormHook());
    act(() => {
      result.current.setLastName('Very Own');
    });
    expect(result.current.lastName).toBe('Very Own');
  });

  it('should update department', () => {
    const { result } = renderHook(() => useAddressBookFormHook());
    act(() => {
      result.current.setDepartment('Tech');
    });
    expect(result.current.department).toBe('Tech');
  });

  it('should update phone', () => {
    const { result } = renderHook(() => useAddressBookFormHook());
    act(() => {
      result.current.setPhone(3545423);
    });
    expect(result.current.phone).toBe(3545423);
  });

  it('should return first name error', () => {
    const { result } = renderHook(() => useAddressBookFormHook());

    act(() => {
      result.current.setLastName('Very Own');
      result.current.setDepartment('department of innovation');
      result.current.setPhone(162455);
    });

    const { validationResponse } = result.current.getFormValidation();

    expect(validationResponse.firstName).not.toBe('');
    expect(validationResponse.lastName).toBe('');
    expect(validationResponse.department).toBe('');
    expect(validationResponse.phone).toBe('');
  });

  it('should return last name error', () => {
    const { result } = renderHook(() => useAddressBookFormHook());

    act(() => {
      result.current.setFirstName('My');
      result.current.setDepartment('department of test');
      result.current.setPhone(56465443);
    });

    const { validationResponse } = result.current.getFormValidation();

    expect(validationResponse.firstName).toBe('');
    expect(validationResponse.lastName).not.toBe('');
    expect(validationResponse.department).toBe('');
    expect(validationResponse.phone).toBe('');
  });

  it('should return department error', () => {
    const { result } = renderHook(() => useAddressBookFormHook());

    act(() => {
      result.current.setFirstName('Your');
      result.current.setLastName('name');
      result.current.setPhone(8643533);
    });

    const { validationResponse } = result.current.getFormValidation();

    expect(validationResponse.firstName).toBe('');
    expect(validationResponse.lastName).toBe('');
    expect(validationResponse.department).not.toBe('');
    expect(validationResponse.phone).toBe('');
  });

  it('should return phone error', () => {
    const { result } = renderHook(() => useAddressBookFormHook());

    act(() => {
      result.current.setFirstName('Your');
      result.current.setLastName('name');
      result.current.setDepartment('department of phones');
    });

    const { validationResponse } = result.current.getFormValidation();

    expect(validationResponse.firstName).toBe('');
    expect(validationResponse.lastName).toBe('');
    expect(validationResponse.department).toBe('');
    expect(validationResponse.phone).not.toBe('');
  });

  it('should reset all values', () => {
    const { result } = renderHook(() => useAddressBookFormHook());

    act(() => {
      result.current.setFirstName('final');
      result.current.setLastName('testing');
      result.current.setDepartment('design');
      result.current.setPhone(5452342);
    });

    expect(result.current.firstName).toBe('final');
    expect(result.current.lastName).toBe('testing');
    expect(result.current.department).toBe('design');
    expect(result.current.phone).toBe(5452342);

    act(() => {
      result.current.resetForm();
    })

    expect(result.current.firstName).toBe('');
    expect(result.current.lastName).toBe('');
    expect(result.current.department).toBe('');
    expect(result.current.phone).toBe('');
  });
});
