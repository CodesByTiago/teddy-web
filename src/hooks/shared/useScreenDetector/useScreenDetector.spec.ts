import { renderHook, act } from '@testing-library/react';
import { useScreenDetector } from './useScreenDetector';

describe('useScreenDetector', () => {
  beforeEach(() => {
    // Definindo largura da janela padrão para os testes
    global.innerWidth = 1024;
  });

  afterEach(() => {
    // Removendo event listeners adicionados durante os testes
    global.innerWidth = 1024;
  });

  it('should return isMobile as true when width is <= 768', () => {
    global.innerWidth = 768;

    const { result } = renderHook(() => useScreenDetector());

    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });

  it('should return isTablet as true when width is <= 1024 and > 768', () => {
    global.innerWidth = 1024;

    const { result } = renderHook(() => useScreenDetector());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);
  });

  it('should return isDesktop as true when width is > 1024', () => {
    global.innerWidth = 1200;

    const { result } = renderHook(() => useScreenDetector());

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(true);
  });

  it('should update width on window resize event', () => {
    const { result } = renderHook(() => useScreenDetector());

    // Simulando mudança de tamanho da janela
    act(() => {
      global.innerWidth = 500;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.isMobile).toBe(true);
    expect(result.current.isTablet).toBe(true);
    expect(result.current.isDesktop).toBe(false);

    act(() => {
      global.innerWidth = 1100;
      window.dispatchEvent(new Event('resize'));
    });

    expect(result.current.isMobile).toBe(false);
    expect(result.current.isTablet).toBe(false);
    expect(result.current.isDesktop).toBe(true);
  });
});
