import { renderHook, act } from '@testing-library/react-hooks';
import { useAddressBookHook } from './index';

describe('USE ADDRESS BOOK HOOK', () => {
  it('should add address', () => {
    const { result } = renderHook(() => useAddressBookHook());
    const props = {
      firstName: 'Emma',
      lastName: 'James',
      department: 'Foodie',
      phone: 533222
    };
    act(() => {
      result.current.addAddress(props);
    });

    expect(result.current.addressList.length).toBe(1);
    expect(result.current.addressList[0].firstName).toBe('Emma');
    expect(result.current.addressList[0].lastName).toBe('James');
    expect(result.current.addressList[0].department).toBe('Foodie');
    expect(result.current.addressList[0].phone).toBe(533222);

    expect(result.current.addressList[0]._createdAt).not.toBe(NaN);
    expect(typeof result.current.addressList[0]._createdAt).toBe('number');

    expect(result.current.addressList[0]._id).not.toBe('');
    expect(typeof result.current.addressList[0]._id).toBe('string');
  });

  it('should delete address', () => {
    const { result } = renderHook(() => useAddressBookHook());
    const props = {
      firstName: 'John',
      lastName: 'Own',
      department: 'Ping pong',
      phone: 34433654
    };
    act(() => {
      result.current.addAddress(props);
    });

    expect(result.current.addressList.length).toBe(1);

    act(() => {
      result.current.deleteAddress(result.current.addressList[0]._id);
    });

    expect(result.current.addressList.length).toBe(0);
  });
});
